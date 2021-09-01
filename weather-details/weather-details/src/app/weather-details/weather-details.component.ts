import { Component, OnInit, Input } from '@angular/core';
import { WeatherDetailsService } from '../weather-details.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  @Input() weatherData: data[] = [];
  city: any;
  cityDetails: any;
  showNoResult: boolean = false;
  hideDetails: boolean = false;
  constructor(public weatherDataService: WeatherDetailsService) { }

  ngOnInit(): void {
    this.weatherData = this.weatherDataService.weatherData;
  }

  validateData(value: any) {
    
    if (value) {
      let foundCityDetails = this.weatherData.find(city => city.name.toUpperCase() == this.city.toUpperCase());
      if (foundCityDetails) {
        this.cityDetails = foundCityDetails;
        this.hideDetails = true;
        this.showNoResult = false;
      }
      else {
        this.showNoResult = true;
        this.hideDetails = false;
      }
    } else {
      this.showNoResult = false;
      this.hideDetails = false;
    }

  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
