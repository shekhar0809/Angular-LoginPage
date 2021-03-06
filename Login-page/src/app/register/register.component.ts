import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateBasis } from '@angular/flex-layout';
import { weatherTemplate } from '../weather/weather.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    isLoggedin: [false],
    phone: [['']]
  });

  constructor(
    private formBuilder: FormBuilder,
    private signup: SignupService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  onSubmit(form: FormGroup) {
    this.signup.addUser(form.value);
    this.router.navigate(['/login']);
  }
}