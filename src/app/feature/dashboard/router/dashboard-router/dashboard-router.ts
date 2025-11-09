import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AppRoutes} from '../../../../shared/app.uri';

@Component({
  selector: 'app-dashboard-router',
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './dashboard-router.html',
  standalone: true,
  styleUrl: './dashboard-router.scss'
})
export class DashboardRouter {
  routes = AppRoutes;
}
