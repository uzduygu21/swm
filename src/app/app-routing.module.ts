import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './examples/about/about.component';
import { WhoWeServeComponent } from './examples/who-we-serve/who-we-serve.component';
import { ServicesComponent } from './examples/services/services.component';
import { BlogComponent } from './examples/blog/blog.component';
import { ContactComponent } from './examples/contact/contact.component';
import { ComponentsComponent } from './examples/components/components.component';
import { PlanningProcessComponent } from './examples/planning-process/planning-process.component';
import { BlogOneComponent } from './examples/blog/blog-one/blog-one.component';
import { BlogTwoComponent } from './examples/blog/blog-two/blog-two.component';
import { BlogThreeComponent } from './examples/blog/blog-three/blog-three.component';
import { BlogFourComponent } from './examples/blog/blog-four/blog-four.component';
import { BlogFiveComponent } from './examples/blog/blog-five/blog-five.component';
import { BlogSixComponent } from './examples/blog/blog-six/blog-six.component';
import { BlogSevenComponent } from './examples/blog/blog-seven/blog-seven.component';
import { BlogEightComponent } from './examples/blog/blog-eight/blog-eight.component';


const routes: Routes = [
  { path: '', component: ComponentsComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'whoweserve', component: WhoWeServeComponent },
  { path: 'services', component: ServicesComponent},
  { path: 'planningprocess', component: PlanningProcessComponent },
  { path: 'blog', title: 'Servet Wealth Management - Blog', 
  children: [
    { path: '', component: BlogComponent},
    { path: 'new-year-new-goals', component: BlogOneComponent },
    { path: 'earn-more-interest',  component: BlogTwoComponent },
    { path: 'job-transition',  component: BlogThreeComponent },
    { path: 'mutual-fund-taxes',  component: BlogFourComponent },
    { path: 'hsa-shoebox-strategy',  component: BlogFiveComponent },
    { path: 'what-is-inside-spy',  component: BlogSixComponent },
    { path: 'ibonds-2021', component: BlogSevenComponent },
    { path: 'donor-advised-fund', component: BlogEightComponent }
  ]
 },
  { path: 'contact',  component: ContactComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
