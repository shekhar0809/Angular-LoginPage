import { Injectable } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


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
    if(this.validate( obj.username )) {
      if( obj.password === this.getItem(obj.username).password ) {
        alert("you have been logged in!");
        return true;
      }
      else {
        alert("something went wrong!");
        return false ;
      }
    }
  }

}
