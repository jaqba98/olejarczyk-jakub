import { Component } from '@angular/core';

import { NavDumbComponent } from '../../dumb/nav-dumb/nav-dumb.component';
import { HamburgerSmartComponent } from '../hamburger-smart/hamburger-smart.component';

@Component({
  selector: 'lib-nav-smart',
  providers: [NavDumbComponent, HamburgerSmartComponent],
  templateUrl: './nav-smart.component.html',
  imports: [NavDumbComponent, HamburgerSmartComponent],
})
export class NavSmartComponent {}
