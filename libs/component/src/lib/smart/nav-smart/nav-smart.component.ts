import { Component } from '@angular/core';

import { NavDumbComponent } from '../../dumb/nav-dumb/nav-dumb.component';
import { HamburgerSmartComponent } from '../hamburger-smart/hamburger-smart.component';
import { LogoSmartComponent } from '../logo-smart/logo-smart.component';

@Component({
  selector: 'lib-nav-smart',
  imports: [LogoSmartComponent, NavDumbComponent, HamburgerSmartComponent],
  templateUrl: './nav-smart.component.html',
})
export class NavSmartComponent {}
