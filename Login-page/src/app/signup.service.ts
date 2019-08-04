import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SignupService {


  constructor(
    private db: AngularFirestore
  ) { }

  addUser(data) {
    //check if email already exists
    this.db.collection('userData').add(data);
    // localStorage.setItem( object.userName , JSON.stringify(object) );
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
