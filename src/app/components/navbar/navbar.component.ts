import { Component, HostListener } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;
  activeSection: string | null = '';
  isNavbarFixed = false;
  offset = 200;
  
  constructor(private router: Router) {
    this.activeSection = '';
    if(this.router.url === '/'){
      this.updateActiveSection()
    }else{

    }
  }
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isNavbarFixed = window.pageYOffset > 100;
    this.updateNavbarFixed();
 
    if(this.router.url === '/'){
      this.updateActiveSection();
    }
  }

  test(){
    if(this.isMenuOpen){
      this.isMenuOpen = false;
      console.log(this.isMenuOpen)
    }else{
      this.isMenuOpen = true;
      console.log(this.isMenuOpen)
    }
  }

  updateNavbarFixed() {
    const scrollPosition = window.pageYOffset;
    this.isNavbarFixed = scrollPosition > 0;
  }

  scrollToSection(sectionId: string) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionElement.clientHeight;
      const offset = Math.max((windowHeight - sectionHeight) / 2, 0);
  
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    } else {
      console.warn(`Element with ID '${sectionId}' not found.`);
    }
  }
  updateActiveSection() {
    console.log(this.activeSection);
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset + this.offset;
    console.log(scrollPosition);
  
    if(scrollPosition === 200){
      this.activeSection = 'home'
    }else{
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop - this.offset;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');
    
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          if (sectionId !== this.activeSection) {
            this.activeSection = sectionId;
            break;
          }
        }
      }
    }
    
  }
}
