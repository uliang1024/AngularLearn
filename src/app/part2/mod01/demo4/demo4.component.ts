
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styles: [
  ]
})
export class Demo4Component {

  constructor(private http: HttpClient) {

  }
  time: any;
  rptTime: any;
  readonly rootUrl = "https://mod08api01.azurewebsites.net";
  start117() {
    // this.http.get(`${this.rootUrl}/WeatherForecast/Get117`, { responseType: 'text' }).subscribe(
    //   (t) => this.time = t
    // );

    // this.time= this.http.get(`${this.rootUrl}/WeatherForecast/Get117`, { responseType: 'text' });
    this.rptTime = interval(1000).subscribe({
      next: () =>
        this.time = this.http.get(`${this.rootUrl}/WeatherForecast/Get117`, { responseType: 'text' })
    });

  }
  stop117() {
    this.rptTime.unsubscribe();
  }
}
