import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor() { }

  users = []

  addUser(new_user) {
    //check if email already exists

    this.users.push(new_user)
    alert("You have been registered!")
  }

  getUsers() {
    return this.users
  }


}
