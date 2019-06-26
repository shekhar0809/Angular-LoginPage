import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor() { }

  addUser(object) {
    //check if email already exists

    localStorage.setItem( object.userName , JSON.stringify(object) );
  }

  getUsers() {

  }


}
