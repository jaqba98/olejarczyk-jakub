import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModel } from './menu.model';

@Component({
  selector: 'lib-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input({ required: true }) menu!: MenuModel;
}
