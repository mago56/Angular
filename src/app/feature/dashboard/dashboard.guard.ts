import {CanActivateFn, Router} from '@angular/router';
import {of} from 'rxjs';
import {inject} from '@angular/core';
import {SecurityService} from '../../security/service/security.service';

export function DashboardGuard(redirectRoute: string = ''): CanActivateFn {
  return () => {
    const securityService: SecurityService = inject(SecurityService);
    const canAccess: boolean = securityService.isAuthenticated$();
    const router: Router = inject(Router);// Nous faisons une DI pour récupérer le système de Router

    return canAccess || router.createUrlTree([redirectRoute]);
  };
}
