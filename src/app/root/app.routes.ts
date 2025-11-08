import { Routes } from '@angular/router';
import {SignInPage} from '../security/page/sign-in-page/sign-in-page';

export const routes: Routes = [
  {
    // https://localhost:4200/
    path:'',
    redirectTo:'sign-in',
    pathMatch: 'full'

  },

  {
    // https://localhost:4200/lazy
    path:'sign-in',
    loadComponent: ()=> import('../security/page/sign-in-page/sign-in-page').then(p=>p.SignInPage)
  },

  {
    path:'**',
    loadComponent: ()=> import('../shared/ui/page').then(p=>p.CommonFallBackPage)

  }




];
