import { Routes } from '@angular/router';
import {DashboardGuard} from '../feature/dashboard/dashboard.guard';


export const routes: Routes = [
  {
    // https://localhost:4200/
    path:'',
    redirectTo:'AppNode.PUBLIC',
    pathMatch: 'full'

  },

  {
    // https://localhost:4200/sign-in
    path:'AppNode.PUBLIC',
    loadChildren:()=> import('../security/security.routes').then(p=>p.securityRoutes)
  },

  {
    // https://localhost:4200/dashboard
    path:'AppNode.AUTHENTICATED',
    canActivate:[DashboardGuard()],
    loadChildren: ()=> import('../feature/dashboard').then(r=>r.dashboardRoutes)
  },

  {
    path:'AppNode.Fall_Back',
    loadComponent: ()=> import('../shared/ui/page').then(p=>p.CommonFallBackPage)

  }




];
