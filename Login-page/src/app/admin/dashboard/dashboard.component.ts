import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: Object;
  passDisable: Boolean = false;
  emailDisable: Boolean = false;

  emailForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  })

  passwordForm: FormGroup = this.formBuilder.group({
    currentPassword: ['', [Validators.required ]],
    newPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }
  )


  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.uname)
      this.data(params.uname);
      console.log(this.user)
    });
  }

  data(key) {
    this.user = JSON.parse(localStorage.getItem(key));
  }

  toggleEmail() {
    if (this.emailDisable == true)
      this.emailDisable = false;

    else
      this.emailDisable = true
  }

  togglePass() {
    if (this.passDisable == true)
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
}
