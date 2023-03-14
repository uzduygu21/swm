import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './examples/about/about.component';
import { WhoWeServeComponent } from './examples/who-we-serve/who-we-serve.component';
import { ServicesComponent } from './examples/services/services.component';
import { BlogComponent } from './examples/blog/blog.component';
import { ContactComponent } from './examples/contact/contact.component';
import { ComponentsComponent } from './examples/components/components.component';
import { PlanningProcessComponent } from './examples/planning-process/planning-process.component';


const routes: Routes = [
  { path: '', component: ComponentsComponent, pathMatch: 'full' },
  { path: 'about',  component: AboutComponent },
  { path: 'whoweserve', component: WhoWeServeComponent },
  { path: 'services', component: ServicesComponent},
  { path: 'planningprocess', component: PlanningProcessComponent },
  { path: 'blog',  component: BlogComponent },
  { path: 'contact',  component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
