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

  getCityWeatherByName(city: string, metric: 'metric' | 'imperial' = 'metric'): Observable<any> {
   return this.http.get<any>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=8d8616b1a79081588fabeca72561d568`);
  }

  // getWeatherState(city: string): Subject<string> {
  //   const dataSubject = new Subject<string>();
  //   this.dataSub
  //     .subscribe((data) => {
  //       dataSubject.next(data['weather'][0].main);
  //     });
  //   return dataSubject;
  // }

  // getCurrentTemp(city: string, metric: 'metric' | 'imperial' = 'metric'): Subject<number> {
  //   const dataSubject = new Subject<number>();
  //   this.dataSub
  //     .subscribe((weather: any) => {
  //       dataSubject.next(Math.round(Number(weather.main.temp)));
  //     });
  //   return dataSubject;
  // }


  // getCurrentHum(city: string, metric: 'metric' | 'imperial' = 'metric'): Subject<number> {
  //   const dataSubject = new Subject<number>();
  //   this.dataSub
  //     .subscribe((weather: any) => {
  //       console.log(weather);
  //       dataSubject.next(weather.main.humidity);
  //     });
  //   return dataSubject;
  // }


  // getCurrentWind(city: string, metric: 'metric' | 'imperial' = 'metric'): Subject<number>  {
  //   const dataSubject = new Subject<number>();
  //   this.dataSub
  //     .subscribe((weather: any) => {
  //       dataSubject.next(Math.round(Math.round(weather.wind.speed)));
  //     });
  //   return dataSubject;
  // }


  // getMaxTemp(city: string, metric: 'metric' | 'imperial' = 'metric'): Subject<number>  {
  //   const dataSubject = new Subject<number>();
  //   let max: number;
  //   this.dataSub
  //     .subscribe((weather: any) => {
  //       max = weather.list[0].main.temp;
  //       weather.list.forEach((value) => {
  //         if (max < value.main.temp) {
  //           max = value.main.temp;
  //         }
  //       });
  //       dataSubject.next(Math.round(max));
  //     });
  //   return dataSubject;
  // }

  // getMinTemp(city: string, metric: 'metric' | 'imperial' = 'metric'): Subject<number>  {
  //   const dataSubject = new Subject<number>();
  //   let min: number;
  //   this.dataSub
  //     .subscribe((weather: any) => {
  //       min = weather.list[0].main.temp;
  //       weather.list.forEach((value) => {
  //         if (min > value.main.temp) {
  //           min = value.main.temp;
  //         }
  //       });
  //       dataSubject.next(Math.round(min));
  //     });
  //   return dataSubject;
  // }
 
}