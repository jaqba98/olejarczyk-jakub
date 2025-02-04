import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HamburgerComponent } from '../hamburger/hamburger.component';
import { LogoComponent } from '../logo/logo.component';
import { MenuComponent } from '../menu/menu.component';
import { MenuModel } from '../menu/menu.model';

@Component({
  selector: 'lib-nav',
  imports: [CommonModule, LogoComponent, MenuComponent, HamburgerComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  menu: MenuModel = {
    links: [
      { label: 'Link1' },
      { label: 'Link2' },
      { label: 'Link3' },
      { label: 'Link4' },
      { label: 'Link5' },
    ],
  };
}
