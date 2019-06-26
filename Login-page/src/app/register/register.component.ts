import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignupService } from '../signup.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    userName: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private signup: SignupService
  ) { }

  ngOnInit() {

  }

  onSubmit(form: FormGroup) {
    this.signup.addUser(form.value);
  }


}
