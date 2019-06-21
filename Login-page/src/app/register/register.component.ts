import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private signupService: SignupService
  ) { }

  ngOnInit() {
  }

  getData(event) {
    // event.preventDefault()
    
    const target = event.target

    let firstname = target.querySelector('#firstname').value ;
    let lastname = target.querySelector('#lastname').value ;
    let email = target.querySelector('#email').value  ;
    let pass1 = target.querySelector('#password').value ;

    let details =  {
      "Firstname" : firstname,
      "Lastname" : lastname,
      "email" : email,
      "password" : pass1
    }

    console.log(details)
    this.signupService.addUser(details)
  }


}
