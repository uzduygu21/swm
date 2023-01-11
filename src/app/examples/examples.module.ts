import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { WhoWeServeComponent } from './who-we-serve/who-we-serve.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';



@NgModule({
  declarations: [
    LandingComponent,
    AboutComponent,
    WhoWeServeComponent,
    ServicesComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ]
})
export class ExamplesModule { }
