import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public weather: any[];
  public city: string;
  public country: string;    

  constructor(public navCtrl: NavController, private http: Http) {

  }

  ngOnInit() {
      this.http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=Porto%20Alegre,Brazil&cnt=3&units=metric&appid=94cd6c40f0df1baa9b7db667ba255def')
          .map((res: Response) => {
              let body = res.json();

              return body || {};
          })
          .subscribe(weather => {
              console.log(weather);
              this.city = weather.city.name;
              this.country = weather.city.country;

              this.weather = weather.list;
          });
  }

}
