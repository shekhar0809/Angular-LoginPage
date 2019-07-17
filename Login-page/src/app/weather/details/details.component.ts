import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { WeatherService } from '../../service/weather.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  city: string;
  state: string;
  temp: number;
  hum: number;
  wind: number;
  today: string;


  sub1: Subscription;


  constructor(public activeRouter: ActivatedRoute, 
    public weather: WeatherService
  ) {
  }

  ngOnInit() {  
    this.sub1 = this.weather.getCityWeatherByName("London").subscribe(result => {
      console.log(result)
    })

    console.log( "this is sub1  "  ,  this.sub1)

  
  }


  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}