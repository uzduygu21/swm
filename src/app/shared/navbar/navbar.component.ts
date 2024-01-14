import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuCollapsed = true;
  collapsed = true;
  private toggleButton: any;
  public sidebarVisible: boolean;
  @ViewChild('togglingOnHover') togglingOnHover!: ElementRef;

  constructor(public location: Location, private element : ElementRef) {
    this.sidebarVisible = false;
  }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
}

onHover(event: any) {
console.log("HOVERED", event)

}

sidebarOpen() {
  const toggleButton = this.toggleButton;
  const html = document.getElementsByTagName('html')[0];
  // console.log(html);
  // console.log(toggleButton, 'toggle');

  setTimeout(function(){
      toggleButton.classList.add('toggled');
  }, 500);
  html.classList.add('nav-open');

  this.sidebarVisible = true;
};
sidebarClose() {
  const html = document.getElementsByTagName('html')[0];
  // console.log(html);
  this.toggleButton.classList.remove('toggled');
  this.sidebarVisible = false;
  html.classList.remove('nav-open');
};
sidebarToggle() {
  // const toggleButton = this.toggleButton;
  // const body = document.getElementsByTagName('body')[0];
  if (this.sidebarVisible === false) {
      this.sidebarOpen();
  } else {
      this.sidebarClose();
  }
};

}
