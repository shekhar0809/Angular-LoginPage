import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor( 
    private login : LoginService
   ) { 
   }

  ngOnInit() {
  }
  
  value = "Log In";

  // if logged in, print username

  // if( this.login.login ) {
  //   value = user.username;
  // }

}
