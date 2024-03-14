import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styles: [
  ]
})
export class TeacherComponent {
  passData: string;
  constructor(private router: Router) {
    // for (let i = 0; i < 500000; i++) {
    //   console.log("for...end");

    // }
    this.passData = "This time is good time.";
  }

  passDataByParams() {
    let extras: NavigationExtras = { queryParams: { data: this.passData + '(NavigationExtras)' } };
    this.router.navigate(['/teacher', 'project'],extras)
  }
}
