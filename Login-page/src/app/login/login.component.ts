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

  auto_userName: string = "";
  auto_passWord: string = "";

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    rememberMe: false
  })

  constructor(
    private formBuilder: FormBuilder,
    private login: LoginService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.autofill();
  }

  onLogin(form: FormGroup) {
    this.auth.Login(form);
  }

  autofill() {
    if (sessionStorage.getItem('username')) {
      this.loginForm.controls['username'].setValue(sessionStorage.getItem('username'));
      // this.auto_userName = ;
    }

    if (sessionStorage.getItem('password')) {
      this.loginForm.controls['password'].setValue(sessionStorage.getItem('password'));
      // this.auto_passWord = sessionStorage.getItem('password');
    }

    return;
  }

}
