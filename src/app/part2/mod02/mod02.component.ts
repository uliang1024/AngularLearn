import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-mod02',
  templateUrl: './mod02.component.html',
  styleUrls: ['./mod02.component.css']
})
export class Mod02Component {
  title = 'mod02';

  showLoading = true
  showError = false
  constructor(private router: Router) {
    router.events.subscribe((event => {
      if (event instanceof NavigationStart) {
        this.showLoading = true
        this.showError = false
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.showLoading = false
      }
      if (event instanceof NavigationError) {
        this.showError = true
      }
    }))
  }
}
