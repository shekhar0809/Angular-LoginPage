import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminModule } from './admin/admin.module';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,

    RegisterComponent,
    ContactComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    MatCheckboxModule,
    MatMenuModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule, 
    MatInputModule, 
    MatSelectModule, 
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      } ,
      {
        path: 'register',
        component: WelcomeComponent
      },
      {
        path: 'home' ,
        component: HomeComponent
      },
      {
        path: 'contact' ,
        component: ContactComponent
      },
      {
        path: 'dashboard/:uname' ,
        component: DashboardComponent
      },
      {
        path: '' ,
        component: HomeComponent
      }
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
