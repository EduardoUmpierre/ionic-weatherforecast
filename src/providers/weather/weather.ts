import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherProvider {
    private url:string;
    private urlBase = 'http://api.openweathermap.org/data/2.5/';
    private urlParams = '&units=metric&appid=94cd6c40f0df1baa9b7db667ba255def';
    //private city: string;
    //private country: string;
    //private weather: any[];

    constructor(public http:Http) {
        console.log('Hello WeatherProvider Provider');
    }

    builder(type:string, location:string, params:string) {
        this.url = this.urlBase + type + '?q=' + location;

        if (params)
            this.url += '&' + params;

        this.url += this.urlParams;

        return this;
    }

    getWeatherData() {
        return this.http.get(this.url)
            .toPromise()
            .then((weather) => {
                return weather.json() || {}
            });
    }
}
