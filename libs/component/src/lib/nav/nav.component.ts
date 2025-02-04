import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HamburgerComponent } from '../hamburger/hamburger.component';

@Component({
  selector: 'lib-nav',
  imports: [CommonModule, HamburgerComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {}
