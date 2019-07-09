import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    if (!this.authService.loggedIn) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


}


