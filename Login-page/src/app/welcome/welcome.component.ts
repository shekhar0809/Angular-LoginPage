import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private signupService: SignupService

  ) { }

  ngOnInit() {
  }

  // display() {
  //   console.log(this.signupService.getUsers())
  // }

}
