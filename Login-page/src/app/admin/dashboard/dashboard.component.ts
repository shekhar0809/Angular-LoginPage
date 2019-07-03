import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: Object;

  emailForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  })

  passwordForm: FormGroup = this.formBuilder.group({
    currentPassword: ['', Validators.required ],
    newPassword: ['', Validators.required ],
    confirmPassword: ['', Validators.required ]
  }
)


  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute  
  )
   {
   }

  ngOnInit() {
    // to get data on every page refresh
    this.route.params.subscribe(params => {
      console.log(params.uname)
      this.data(params.uname);
    });
  }

  data(key)
  {
    this.user = JSON.parse( localStorage.getItem(key))
  }


}
