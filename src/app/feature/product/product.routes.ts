import {Routes} from '@angular/router';
import {AppNode} from '../../shared/app.node';

export const productRoutes:Routes = [
  {
    path:'',
    loadComponent:()=> import('./page').then(p=>p.ProductHomePage)
  },
  {
    path:`${AppNode.DETAIL}`,
    loadComponent:()=> import('./page').then(p =>p.ProductHomePage)
  }


]
