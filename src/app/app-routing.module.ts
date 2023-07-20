import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllBlogsComponent } from './pages/all-blogs/all-blogs.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent,  pathMatch: 'full' },
  { path: 'blogs', component: AllBlogsComponent},
  { path: 'contactus', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
