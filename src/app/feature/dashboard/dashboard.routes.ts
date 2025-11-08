import {Route, Routes} from '@angular/router';

export const dashboardRoutes : Routes = [
  {
    path:'',
    loadComponent:()=> import('./router').then(p=>p.DashboardRouter),
    children:[
      {
        path:'',
        loadComponent:()=> import('./page').then(p=>p.DashboardHomePage)
      },
      {
        // https://localhost:4200/dashboard
        path:'member',
        loadChildren: ()=> import('../member').then(r=>r.memberRoutes)
      },


      {
        // https://localhost:4200/dashboard
        path:'product',
        loadChildren: ()=> import('../product').then(r=>r.productRoutes)
      }
    ]
  },

  {
    path:'**',
    loadComponent:()=> import('./page').then(p=>p.DashboardFallBackPage)
  }
]
