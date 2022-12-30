import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { AboutComponent } from './examples/about/about.component';
import { WhoWeServeComponent } from './examples/who-we-serve/who-we-serve.component';
import { ServicesComponent } from './examples/services/services.component';


const routes: Routes = [
  { path: '', component: ComponentsComponent, pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'nucleoicons', component: NucleoiconsComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'whoweserve', component: WhoWeServeComponent },
  { path: 'services', component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
