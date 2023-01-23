import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  focus: any;
  focus1: any;

  constructor(public router: Router) {}

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
