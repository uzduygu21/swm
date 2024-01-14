import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-who-we-serve',
  templateUrl: './who-we-serve.component.html',
  styleUrls: ['./who-we-serve.component.scss']
})
export class WhoWeServeComponent {
  focus: any;
  focus1: any;

  constructor(public router: Router) {}

  inView(ele: any) {
    ele.scrollIntoView(false);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
