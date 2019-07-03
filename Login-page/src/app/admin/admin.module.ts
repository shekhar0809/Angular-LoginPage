import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatButtonModule, 
    MatInputModule, 
    MatSelectModule, 
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    FlexLayoutModule,
  ]
})
export class AdminModule { }
