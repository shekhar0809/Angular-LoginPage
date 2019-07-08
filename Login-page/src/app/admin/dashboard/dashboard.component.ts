import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.dirty && form.invalid;
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: Object;
  passDisable: Boolean = false;
  emailDisable: Boolean = false;

  errorMatcher = new CrossFieldErrorMatcher();

  emailForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  })

  passwordForm: FormGroup = this.formBuilder.group({
    currentPassword: ['', [Validators.required ]],
    newPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, { validators: this.passwordValidator }
  )


  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.data(params.uname);
    });
  }

  passwordValidator(form: FormGroup) {
    const condition = form.value.newPassword !== form.value.confirmPassword ;
    return condition ? { passwordsDoNotMatch: true} : null;
  }

  data(key) {
    this.user = JSON.parse(localStorage.getItem(key));
  }

  toggleEmail() {
    if (this.emailDisable)
      this.emailDisable = false;

    else
      this.emailDisable = true
  }

  togglePass() {
    if (this.passDisable)
      this.passDisable = false;

    else
      this.passDisable = true
  }

  onChangeEmail(form: FormGroup) {
    this.user['email'] = form.value.email;
    localStorage.setItem(this.user['userName'], JSON.stringify(this.user));
    this.toggleEmail();
  }


  onChangePass(form: FormGroup) {
    this.user['password'] = form.value.newPassword;
    localStorage.setItem(this.user['userName'], JSON.stringify(this.user));
    this.togglePass();
  }

  signOut() {
    this.user['isLoggedin'] = false;
    localStorage.setItem(this.user['userName'], JSON.stringify(this.user));
    this.router.navigate(['']);
    sessionStorage.clear();
  }

}
