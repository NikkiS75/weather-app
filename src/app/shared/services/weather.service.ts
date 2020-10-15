import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Weather} from '../interfaces/weather';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getForecast(): Observable<any>{
    return this.http.get(`${environment.openWeatherMapUrl}`);
  }
  // GET-запрос к API OpenWeatherMap
}
