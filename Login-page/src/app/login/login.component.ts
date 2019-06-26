import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginService } from '../login.service'

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
    private login: LoginService
   ) { }

  ngOnInit() {
  }

  onLogin( form: FormGroup )
  {
    this.login.login(form.value)
  }

}
