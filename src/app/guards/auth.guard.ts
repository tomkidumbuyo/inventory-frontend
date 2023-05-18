import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve, reject) => {
        this.authService.getAuthStatus()
        .then((isAuthenticated: Boolean) => {
          console.log(isAuthenticated)
          if (!isAuthenticated) {
            this.router.navigate(['/authentication']);
            resolve(false);
          }
          resolve(true);
        })
        .catch((err) => {
          resolve(false);
        });
      })
  }
}
