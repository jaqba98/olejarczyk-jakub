import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

import { LogoSmartComponent } from '../../smart/logo-smart/logo-smart.component';
import { HamburgerSmartComponent } from '../../smart/hamburger-smart/hamburger-smart.component';
import { MenuViewComponent } from '../menu-view/menu-view.component';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'lib-nav-view',
  imports: [LogoSmartComponent, HamburgerSmartComponent, MenuViewComponent],
  templateUrl: './nav-view.component.html',
  styleUrl: './nav-view.component.scss',
})
export class NavViewComponent extends BaseComponent {
  constructor(protected override readonly store: Store) {
    super(store);
  }
}
