import {HttpErrorResponse, HttpHandlerFn,  HttpInterceptorFn, HttpRequest} from '@angular/common/http';
const baseURL: string = environment.apiURL;
const publicRoute: string[] = publicRoutes();
import {catchError, EMPTY, Observable, switchMap, tap} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {inject} from '@angular/core';
import {TokenService} from '../service/token.service';
import {Router} from '@angular/router';
import {ApiService} from '../service/api.service';
import {AppNode} from '../../app.node';
import {ApiResponse, Token} from '../data';
import {AddTokenHeaderFn, HttpInterceptorCommonErrorHandlerFn, HttpInterceptorHandlerFn} from '../data/type';
import {ApiURIPublic, publicRoutes} from '../data/enum/uri.enum';

export const HttpInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  if(!req.url.startsWith(baseURL) || publicRoute.includes(req.url)){
    return next(req)
  }

  const tokenService = inject(TokenService);
  const router: Router = inject(Router);
  if(!tokenService.token$().isEmpty){
    const api: ApiService = inject(ApiService);
    return next (setTokenInHeader(req, tokenService.token$().token))
      .pipe(catchError((err: HttpErrorResponse) => handleError(err , req , next , tokenService , router , api)));
  }

  return redirectToPublic(router);


}

const redirectToPublic: (router:Router) => Observable<any> = (router: Router)=>{
  if(!window.location.pathname.startsWith(`/${AppNode.REDIRECT_TO_PUBLIC}`)){
    router.navigate([AppNode.REDIRECT_TO_PUBLIC]).then();
  }
  return EMPTY;
}

const setTokenInHeader: AddTokenHeaderFn = (req: HttpRequest<any> , token: string): HttpRequest<any> =>{
  return req.clone({
    headers: req.headers.set('Authorization' , `Bearer ${token}`)
  });
}

const handleError: HttpInterceptorHandlerFn = (err: HttpErrorResponse , req: HttpRequest<any> , next: HttpHandlerFn,
                                         tokenService: TokenService, router: Router , api: ApiService): Observable<any> =>{
  if(err.status=== 401 || err.status === 403){
    if(!tokenService.token$().isEmpty){
      return api.post(ApiURIPublic.REFRESH, {refresh: tokenService.token$().refreshToken})
        .pipe(
          switchMap((result: ApiResponse)=>{
            if(result.result){
              return next(setTokenInHeader(req, result.data.token)).pipe(
                catchError((err: HttpErrorResponse)=> handleCommonError(err)),
                tap(()=> tokenService.setToken({...result.data as Token , isEmpty: false}))
              );
            }
            return redirectToPublic(router);
          }))

    }
    return redirectToPublic(router);
  }

  return handleCommonError(err);
}

const handleCommonError: HttpInterceptorCommonErrorHandlerFn = (err: HttpErrorResponse): Observable<any> =>{
  throw (err);
}
