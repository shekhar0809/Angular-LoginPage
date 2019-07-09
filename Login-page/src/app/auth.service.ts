import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { FormGroup } from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  loggedIn: Boolean;
  UserData: Object;

  constructor(
    private loginService: LoginService,
    private router: Router

  ) 
  {
    this.loggedIn = false;
  }

  Login( form: FormGroup)
  {
    this.UserData = this.loginService.login( form.value );
    this.loggedIn = this.UserData['isLoggedin']

    if( form.value.rememberMe ) {
      sessionStorage.setItem( 'username' , form.value.username );
      sessionStorage.setItem( 'password' , form.value.password )
    }

    let uname = this.UserData['userName'];
    this.router.navigate(['dashboard/',uname]);
  }

  getUser()
  {
    return this.UserData;
  }

}
