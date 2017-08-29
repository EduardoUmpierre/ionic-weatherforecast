import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public weather:any[];
    public city:string;
    public country:string;

    constructor(public navCtrl:NavController, private weatherProvider:WeatherProvider) {

    }

    ngOnInit() {
        this.weatherProvider
            .builder('weather', 'Porto Alegre,Brazil', null)
            .getWeatherData()
            .then((res) => {
                this.weather = res;
                console.log(res);
            });
    }
}
