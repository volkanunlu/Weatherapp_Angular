import { WeatherData } from './../models/weather.model';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }


  getWeatherdata(cityName:string): Observable<WeatherData>{

    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {

      headers: new HttpHeaders().set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue).set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyValue),
      params: new HttpParams()
      .set('q',cityName)
      .set('units','metric')
      .set('mode', 'json')

    } ) 

  }
}
