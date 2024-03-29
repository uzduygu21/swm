import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'servet-wealth-management';
  private _router: Subscription = new Subscription;
  @ViewChild(NavbarComponent) navbar!: NavbarComponent;


  constructor( private renderer : Renderer2, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {}

  ngOnInit() {
    var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
    this._router = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
        if (window.outerWidth > 991) {
            window.document.children[0].scrollTop = 0;
        }else{
            window.scroll(0, 0);
        }
        this.navbar.sidebarClose();
    });
    this.renderer.listen('window', 'scroll', (event) => {
        const number = window.scrollY;
        if (number > 150 || window.pageYOffset > 150) {
            // add logic
            navbar.classList.remove('navbar-transparent');
        } else {
            // remove logic
            navbar.classList.add('navbar-transparent');
        }
    });
    var ua = window.navigator.userAgent;
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

}
}
