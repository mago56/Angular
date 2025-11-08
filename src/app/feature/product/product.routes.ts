import {Routes} from '@angular/router';

export const productRoutes:Routes = [
  {
    path:'',
    loadComponent:()=> import('./page').then(p=>p.ProductHomePage)
  }
]
