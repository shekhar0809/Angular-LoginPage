import { Injectable } from '@angular/core';
import { weatherTemplate } from './weather.module';
import { WeatherService } from '../service/weather.service';

@Injectable({
    providedIn: 'root'
})
export class AddCardService {

    cards: weatherTemplate[];

    constructor(
        private weather: WeatherService
    ) {
        this.cards = []
    }

    addCard(city) {
        this.weather.getCityWeather(city)
            .subscribe(result => {
                console.log(result)
                this.cards.push({
                    city: result.name,
                    weather_type: result.weather[0].main,
                    temp: result.main.temp,
                    temp_max: result.main.temp_max,
                    temp_min: result.main.temp_min,
                    hum: result.main.humidity,
                    wind: 0,
                });
            })


    }


}
