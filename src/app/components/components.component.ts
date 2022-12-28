import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit{
  page = 4;
  page1 = 5;
  focus: any;
  focus1: any;
  focus2: any;
  desktopOrMobile: any;
  date!: { year: number; month: number; };
  constructor( private renderer : Renderer2) {}

  ngOnInit() {
      let input_group_focus = document.getElementsByClassName('form-control');
      let input_group = document.getElementsByClassName('input-group');
      for (let i = 0; i < input_group.length; i++) {
          input_group[i].children[0].addEventListener('focus', function (){
              input_group[i].classList.add('input-group-focus');
          });
          input_group[i].children[0].addEventListener('blur', function (){
              input_group[i].classList.remove('input-group-focus');
          });
      }

      console.log("window.innerWidth", window.innerWidth)
      if(window.innerWidth > 600) {
        this.desktopOrMobile = true;
      }
  }
}
