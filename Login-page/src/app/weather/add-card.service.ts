import { Injectable } from '@angular/core';
import { weatherTemplate } from './weather.module';
import { WeatherService } from '../service/weather.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AddCardService {

    cards: weatherTemplate[];
    options: string[];
    items: Observable<any[]>;


    constructor(
        private weather: WeatherService,
        private db: AngularFirestore
    ) {
        this.cards = [];

    }

    addCard(city: string) {
        this.weather.getCityWeather(city)
            .subscribe(result => {
                console.log(result);
                this.cards.push({
                    city: result.name,
                    weather_type: result.weather[0].main,
                    temp: result.main.temp,
                    temp_max: result.main.temp_max,
                    temp_min: result.main.temp_min,
                    hum: result.main.humidity,
                    wind: 0,
                });
            });


    }

    addOption(option: string) {
        const data = {
            name: option
        } ;
        this.db.collection('cities').add(data);
    }

    getOptions() {
        return this.db.collection('cities').snapshotChanges();
    }
}
