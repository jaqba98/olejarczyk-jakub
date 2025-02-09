import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonSmartComponent } from '../../smart/button-smart/button-smart.component';

@Component({
  selector: 'lib-menu-view',
  imports: [CommonModule, ButtonSmartComponent],
  templateUrl: './menu-view.component.html',
  styleUrl: './menu-view.component.scss',
})
export class MenuViewComponent {}
