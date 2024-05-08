import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { WhoWeServeComponent } from './who-we-serve/who-we-serve.component';
import { ServicesComponent } from './services/services.component';
import { PlanningProcessComponent } from './planning-process/planning-process.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AboutComponent,
    WhoWeServeComponent,
    ServicesComponent,
    PlanningProcessComponent,
    HomeComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ]
})
export class ExamplesModule { }
