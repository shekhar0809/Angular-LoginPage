import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  dataSub = new Subject<string>();


  constructor(public http: HttpClient) {
  }

  getCityWeather(city: string, metric: 'metric' | 'imperial' = 'metric'): Observable<any> {
    return this.http.get<any>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=8d8616b1a79081588fabeca72561d568`);
  }

}
