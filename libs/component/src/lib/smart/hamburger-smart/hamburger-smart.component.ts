import { Component } from '@angular/core';

import { HamburgerDumbComponent } from '../../dumb/hamburger-dumb/hamburger-dumb.component';

@Component({
  selector: 'lib-hamburger-smart',
  imports: [HamburgerDumbComponent],
  templateUrl: './hamburger-smart.component.html',
})
export class HamburgerSmartComponent {}
