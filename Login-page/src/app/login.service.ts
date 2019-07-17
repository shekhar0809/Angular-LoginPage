import { Injectable } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { JsonpClientBackend } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router
  ) { }


  validate(key) {
    // undefined is falsy
    return Boolean(localStorage.getItem(key))
  }

  getItem(key) {
    if( this.validate(key) ) {
      return JSON.parse( localStorage.getItem(key) )
    }
    return
  }

  login( obj )
  {
    if( !this.validate( obj.username ) ) {  // check if user exists
      alert("username not registered!");
      return;
    }

    let user = this.getItem(obj.username)
    if( obj.password === user.password ) {  // check if password matches
      user.isLoggedin = true;
      localStorage.setItem(user.userName , JSON.stringify(user) );
    }
    else {
      alert("Invalid username/password!");
      user.isLoggedin = false;
      localStorage.setItem(user.userName , JSON.stringify(user) );
    }
    
    return user;
  }

}
