import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar-v2',
  templateUrl: './navbar-v2.component.html',
  styleUrls: ['./navbar-v2.component.scss']
})
export class NavbarV2Component {
  isNavbarFixed = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isNavbarFixed = window.pageYOffset > 100;
  }
}
