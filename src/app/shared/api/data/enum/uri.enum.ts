
import {environment} from '../../../../../environments/environment';

export enum APIURIPrivate{
  ME = 'account/me'
}

export enum ApiURIPublic{
  ROOT = '',
  MAIN_HELLO_WORLD = 'main/hello-world',
  MAIN_HELLO_WORLD2 = 'main',
  SIGN_IN = 'account/sign-in',
  SIGN_UP = 'account/signup',
  REFRESH = 'account/refresh'
}

export enum APIURI{
  ME = 'account/me'
}

export const publicRoutes = (): string[] => {
  return Object.values(ApiURIPublic).map((path)=>{
    const baseURL: string = environment.apiURL;
    const cleanPath = path.replace(/^\/+/, '');
    return `${baseURL}${cleanPath}`;
  })
}
