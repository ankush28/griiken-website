import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { AllBlogsComponent } from './pages/all-blogs/all-blogs.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NavbarV2Component } from './components/navbar-v2/navbar-v2.component';
import { NgOptimizedImage } from '@angular/common'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AllBlogsComponent,
    ContactUsComponent,
    NavbarV2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
