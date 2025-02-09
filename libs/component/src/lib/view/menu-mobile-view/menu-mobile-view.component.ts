import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MenuViewComponent } from '../menu-view/menu-view.component';

@Component({
  selector: 'lib-menu-mobile-view',
  imports: [CommonModule, MenuViewComponent],
  templateUrl: './menu-mobile-view.component.html',
  styleUrl: './menu-mobile-view.component.scss',
})
export class MenuMobileViewComponent {
  @Input() isOpen = false;
}
