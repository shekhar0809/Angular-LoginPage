import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { AddCardComponent } from './add-card/add-card.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';

@NgModule({
  declarations: [DetailsComponent, AddCardComponent , WeatherCardComponent],
  imports: [
    CommonModule
  ]
})

export class WeatherModule {}