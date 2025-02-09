import { Component } from '@angular/core';

import { LogoSmartComponent } from '../../smart/logo-smart/logo-smart.component';
import { HamburgerSmartComponent } from '../../smart/hamburger-smart/hamburger-smart.component';

@Component({
  selector: 'lib-nav-view',
  imports: [LogoSmartComponent, HamburgerSmartComponent],
  templateUrl: './nav-view.component.html',
  styleUrl: './nav-view.component.scss',
})
export class NavViewComponent {}
