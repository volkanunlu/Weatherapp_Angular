import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private weatherservice : WeatherService){}

  cityName:string = 'Ankara';
  weatherData?:WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName='';

  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName='';

  }

  private getWeatherData(cityName:string){
    this.weatherservice.getWeatherdata(cityName).subscribe({
      next:(response)=>{
        this.weatherData=response;
        console.log(response);
      }
    });


  }

}
