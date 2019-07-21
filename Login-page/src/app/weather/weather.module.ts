import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { AddCardComponent } from './add-card/add-card.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { AskCityComponent } from './ask-city/ask-city.component';

@NgModule({
  declarations: [DetailsComponent, AddCardComponent , WeatherCardComponent, AskCityComponent],
  imports: [
    CommonModule
  ]
})

export class WeatherModule {}


export interface weatherTemplate {
    city: string;
  weather_type: string
  temp: number;
  temp_max: number;
  temp_min: number;
  hum: number;
  wind: number;
}
