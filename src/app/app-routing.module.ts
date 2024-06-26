import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './examples/about/about.component';
import { WhoWeServeComponent } from './examples/who-we-serve/who-we-serve.component';
import { ServicesComponent } from './examples/services/services.component';
import { BlogComponent } from './examples/blog/blog.component';
import { ContactComponent } from './examples/contact/contact.component';
import { HomeComponent } from './examples/home/home.component';
import { PlanningProcessComponent } from './examples/planning-process/planning-process.component';
import { BlogOneComponent } from './examples/blog/blog-one/blog-one.component';
import { BlogTwoComponent } from './examples/blog/blog-two/blog-two.component';
import { BlogThreeComponent } from './examples/blog/blog-three/blog-three.component';
import { BlogFourComponent } from './examples/blog/blog-four/blog-four.component';
import { BlogFiveComponent } from './examples/blog/blog-five/blog-five.component';
import { BlogSixComponent } from './examples/blog/blog-six/blog-six.component';
import { BlogSevenComponent } from './examples/blog/blog-seven/blog-seven.component';
import { BlogEightComponent } from './examples/blog/blog-eight/blog-eight.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BlogNineComponent } from './examples/blog/blog-nine/blog-nine.component';
import { BlogTenComponent } from './examples/blog/blog-ten/blog-ten.component';
import { BlogElevenComponent } from './examples/blog/blog-eleven/blog-eleven.component';
import { BlogTwelveComponent } from './examples/blog/blog-twelve/blog-twelve.component';
import { BlogThirteenComponent } from './examples/blog/blog-thirteen/blog-thirteen.component';


const routes: Routes = [
  { path: '', title: 'Servet Wealth Management - Home', component: HomeComponent },
  { path: 'about', title: 'Servet Wealth Management - About Us', component: AboutComponent },
  { path: 'whoweserve', title: 'Servet Wealth Management - Who We Serve', component: WhoWeServeComponent },
  { path: 'services', title: 'Servet Wealth Management - Services', component: ServicesComponent},
  { path: 'planningprocess', title: 'Servet Wealth Management - Planning Process', component: PlanningProcessComponent },
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
    { path: 'donor-advised-fund', component: BlogEightComponent },
    { path: '2024-market-strategy', component: BlogNineComponent },
    { path: 'life-insurance', component: BlogTenComponent },
    { path: 'high-net-worth-estate-planning', component: BlogElevenComponent },
    { path: 'nj-inheritance-tax', component: BlogTwelveComponent },
    { path: 'nyc-millennials', component: BlogThirteenComponent }
  ]
 },
  { path: 'contact', title: 'Servet Wealth Management - Contact', component: ContactComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class AppRoutingModule { }
