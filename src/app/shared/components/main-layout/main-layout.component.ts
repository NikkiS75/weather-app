import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {Weather} from '../../interfaces/weather';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {


  allForecast: Weather[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getForecast();
  }

  getForecast(): void {
    this.weatherService.getForecast().subscribe( // Прием значений потока
      (res) => {  // Получение response и формирование callback-функции
        for (let i = 1; i < 4; i = i + 1) // в response дневной прогноз на 7 дней (0-6), необходимо выводить прогноз со следующего дня (1-4)
        {// Формирование объекта прогноза
          const forecast: Weather = {
          date: new Date (res.daily[i].dt * 1000),
          dayTemperature: res.daily[i].temp.day,
          description: res.daily[i].weather[0].description,
          icon: `http://openweathermap.org/img/w/${res.daily[i].weather[0].icon}.png`
        }
          this.allForecast.push(forecast); // Добавление объекта в массив
        }
      }
    );
  }


}
