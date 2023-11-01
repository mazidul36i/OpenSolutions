import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  faBars = faBars
  body = document.querySelector("body");

  @ViewChild('navbar') navbarElement!: ElementRef;
  navbar!: HTMLElement;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    if (window.scrollY < 80) {
      this.navbar.classList.remove("navbar-shrink");
    } else if (window.scrollY > 100) {
      this.navbar.classList.add("navbar-shrink");
    }
    console.log('Scrolled', window.scrollY);
  }

  ngAfterViewInit(): void {
    this.navbar = this.navbarElement.nativeElement;
  }

}
