import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../service/weather.service';
import { weatherTemplate } from '../weather.module';
import { AddCardService } from '../add-card.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  @Input() weatherData: weatherTemplate;

  cityName: string;
  weather_type: string
  temp: number;
  temp_max: number;
  temp_min: number;
  hum: number;
  wind: number;

  sub1: Subscription;

  constructor(public activeRouter: ActivatedRoute,
    public weather: WeatherService,
    private addService: AddCardService
  ) {
  }

  ngOnInit() {

    this.update()

  }



  update() {
    for (let i = 0; i < this.addService.cards.length; i++) {

    this.cityName = this.addService.cards[i].city
      this.weather_type =  this.addService.cards[i].weather_type;
      this.temp =  this.addService.cards[i].temp;
      this.temp_max =  this.addService.cards[i].temp_max;
      this.temp_min =  this.addService.cards[i].temp_min;
      this.hum =   this.addService.cards[i].hum;

  }
}

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
}
