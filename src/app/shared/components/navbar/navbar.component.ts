import { Component, HostListener, ElementRef } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('submenuAnimation', [
      transition(':enter', [
        style({ height: '0', opacity: 0 }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ height: '0', opacity: 0 }))
      ])
    ])
  ]
})
export class NavbarComponent {
  isSubmenuOpen = false;
  isSettingsPopoverOpen = false;
  isConfigPopoverOpen = false;
  isAdminSettingsChecked = false;
  
  // Variable to track the active menu item
  activeMenuItem: string = 'Home';

  constructor(private eRef: ElementRef) {}

  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }

  toggleSettingsPopover() {
    this.isSettingsPopoverOpen = !this.isSettingsPopoverOpen;
    this.isConfigPopoverOpen = false;
  }

  toggleConfigPopover() {
    this.isConfigPopoverOpen = !this.isConfigPopoverOpen;
    this.isSettingsPopoverOpen = false;
  }

  toggleAdminSettings() {
    this.isAdminSettingsChecked = !this.isAdminSettingsChecked;
  }

  // Method to set the active menu item
  setActiveMenuItem(menuItem: string) {
    this.activeMenuItem = menuItem;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isSubmenuOpen = false;
      this.isSettingsPopoverOpen = false;
      this.isConfigPopoverOpen = false;
    }
  }
}
