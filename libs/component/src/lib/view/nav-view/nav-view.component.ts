import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { CommonModule } from '@angular/common';

import { LogoSmartComponent } from '../../smart/logo-smart/logo-smart.component';
import { HamburgerSmartComponent } from '../../smart/hamburger-smart/hamburger-smart.component';
import { MenuViewComponent } from '../menu-view/menu-view.component';
import { BaseComponent } from '../../base/base.component';
import { MenuMobileViewComponent } from '../menu-mobile-view/menu-mobile-view.component';
import { MenuState } from '@olejarczyk-jakub/store';

@Component({
  selector: 'lib-nav-view',
  imports: [
    LogoSmartComponent,
    HamburgerSmartComponent,
    MenuViewComponent,
    CommonModule,
    MenuMobileViewComponent,
  ],
  templateUrl: './nav-view.component.html',
  styleUrl: './nav-view.component.scss',
})
export class NavViewComponent extends BaseComponent {
  isOpen = false;

  constructor(protected override readonly store: Store) {
    super(store);
    this.addSub(
      this.store
        .select(MenuState.getIsOpen)
        .subscribe((isOpen) => (this.isOpen = isOpen))
    );
  }
}
