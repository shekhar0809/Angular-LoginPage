import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginService } from '../login.service'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor( 
    private formBuilder: FormBuilder,
    private login: LoginService,
    private auth: AuthService
   ) { }

  ngOnInit() {
  }

  onLogin( form: FormGroup )
  {
    this.auth.Login(form.value);
  }

}
