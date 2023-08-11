import { AfterViewInit, Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  constructor(private authService: AuthService, private router: Router, private el: ElementRef, private renderer: Renderer2) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  logout(): void {
    this.authService.logout()
    this.router.navigate(['/']);
  }

  
  ngAfterViewInit(): void {
    this.navbarShrink(); // Shrink the navbar on initial load
  }

  @HostListener('window:scroll', ['$event'])
  
  onWindowScroll() {
    this.navbarShrink(); // Shrink the navbar on scroll
  }

  navbarShrink() {
    const navbarCollapsible = this.el.nativeElement.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      this.renderer.removeClass(navbarCollapsible, 'navbar-shrink');
    } else {
      this.renderer.addClass(navbarCollapsible, 'navbar-shrink');
    }
  }

  toggleNavbar() {
    const navbarToggler = this.el.nativeElement.querySelector('.navbar-toggler');
    if (window.getComputedStyle(navbarToggler).display !== 'none') {
      navbarToggler.click();
    }
  }
}
