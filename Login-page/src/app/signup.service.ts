import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  exists = false;

  constructor() { }

  addUser(object) {
    //check if email already exists

    localStorage.setItem( object.userName , JSON.stringify(object) );
  }

  validate(key) {
    // undefined is falsy
    return Boolean(localStorage.getItem(key))
  }


  // userExists( key ) {
  //   if( this.validate(key) )
  //   {
  //     this.exists = true;
  //   }
  // }


}
