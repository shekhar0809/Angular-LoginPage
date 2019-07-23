import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { AddCardComponent } from './add-card/add-card.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { AskCityComponent } from './ask-city/ask-city.component';
import { MatButtonModule, MatInputModule, MatAutocompleteModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [DetailsComponent, AddCardComponent, WeatherCardComponent, AskCityComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],

  entryComponents: [
    AskCityComponent
  ],
})

export class WeatherModule { }


export interface weatherTemplate {
  city: string;
  weather_type: string
  temp: number;
  temp_max: number;
  temp_min: number;
  hum: number;
  wind: number;
}
