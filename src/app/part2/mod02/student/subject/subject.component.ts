import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styles: [
  ]
})
export class SubjectComponent {
  data: any
  constructor(public route: ActivatedRoute) { }
  ngOnInit(): void {
    if (this.route.snapshot.data['subject']) {
      this.data = this.route.snapshot.data['subject']
    }
  }
}
