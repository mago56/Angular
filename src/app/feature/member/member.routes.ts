import {Routes} from '@angular/router';
import {AppNode} from '../../shared/app.node';

export const memberRoutes:Routes = [
  {
    path:'',
    loadComponent:()=> import('./page').then(p=>p.MemberHomePage)
  },

  {
    path: `${AppNode.DETAIL}/:id`,
    loadComponent: () => import('./page')
      .then(c => c.MemberDetailPage)
  }
]
