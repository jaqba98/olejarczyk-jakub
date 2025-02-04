import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaService } from '@olejarczyk-jakub/system';
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

  constructor(private readonly media: MediaService) {
    this.media.media$.subscribe((type) => {
      console.log('Typ urządzenia:', type);
    });
  }
}
