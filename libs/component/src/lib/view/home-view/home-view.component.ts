import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponent } from '../../base/base.component';
import { BaseViewComponent } from '../base-view/base-view.component';

@Component({
  selector: 'lib-home-view',
  imports: [CommonModule, BaseViewComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss',
})
export class HomeViewComponent extends BaseComponent {}
