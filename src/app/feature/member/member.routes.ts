import {Routes} from '@angular/router';
import {AppNode} from '../../shared/app.node';

export const memberRoutes:Routes = [
  {
    path:'',
    loadComponent:()=> import('./page').then(p=>p.MemberHomePage)
  },

  {
    path: 'detail/:id',
    loadComponent: () => import('./page/member-detail-page/member-detail-page')
      .then(c => c.MemberDetailPage)
  }
]
