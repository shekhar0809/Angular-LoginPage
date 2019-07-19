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
    // for (let i = 0; i < this.addService.cards.length; i++) {

    //   this.sub1 = this.weather.getCityWeather(this.addService.cards[i].city).subscribe(result => {
    //     console.log(result)
        
    //     this.addService.cards[i].hum = result.main.humidity;
    //     this.addService.cards[i].temp = result.main.temp;

    //     this.addService.cards[i].temp_max = result.main.temp_max;
    //     this.addService.cards[i].temp_min = result.main.temp_min;

    //     this.addService.cards[i].weather_type = result.weather[0].main;
    //   }
    // }
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
}