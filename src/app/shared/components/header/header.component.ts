import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    isSecondHeaderVisible = false; // Controls visibility of second-header
    hamburgerIconClass = 'fa-bars';
    selectedLanguage = 'EN';
    isMobileOrTabletView = false;
  
    constructor() {
      // this.updateViewMode(window.innerWidth);
    }
  
    // @HostListener('window:resize', ['$event'])
    // onResize(event: any) {
    //   this.updateViewMode(event.target.innerWidth);
    // }
  
    updateViewMode(width: number) {
      const wasMobileOrTabletView = this.isMobileOrTabletView;
      this.isMobileOrTabletView = width <= 1024; // Includes both mobile and tablet views
  
      if (!this.isMobileOrTabletView && wasMobileOrTabletView) {
        // If switching from mobile/tablet to desktop, hide the second header
        this.isSecondHeaderVisible = false;
        this.hamburgerIconClass = 'fa-bars';
      }
    }
  
    toggleDropdown() {
      if (this.isMobileOrTabletView) {
        this.isSecondHeaderVisible = !this.isSecondHeaderVisible; // Toggle the second-header
      }
    }
  
    onLanguageChange() {
      console.log(`Selected language: ${this.selectedLanguage}`);
    }
  
    selectLanguage(language: string): void {
      this.selectedLanguage = language;
    }
  }