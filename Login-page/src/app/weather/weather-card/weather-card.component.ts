import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../service/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  city: string;
  state: string;
  weather_type: string
  temp: number;
  temp_max: number;
  temp_min: number;
  hum: number;
  wind: number;
  today: string;


  sub1: Subscription;

constructor(public activeRouter: ActivatedRoute, 
    public weather: WeatherService
  ) {
  }

  ngOnInit() {  
    this.sub1 = this.weather.getCityWeatherByName("Delhi").subscribe(result => {
      console.log(result)

      this.city = result.name

      this.hum = result.main.humidity;
      this.temp = result.main.temp;

      this.temp_max = result.main.temp_max;
      this.temp_min = result.main.temp_min;

      this.weather_type = result.weather[0].main

    })
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}