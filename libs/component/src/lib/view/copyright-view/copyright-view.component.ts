import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LogoEnum } from '@olejarczyk-jakub/model';
import { BaseViewComponent } from '../base-view/base-view.component';
import { TextSmartComponent } from '../../smart/text-smart/text-smart.component';

@Component({
  selector: 'lib-copyright-view',
  imports: [CommonModule, BaseViewComponent, TextSmartComponent],
  templateUrl: './copyright-view.component.html',
  styleUrl: './copyright-view.component.scss',
})
export class CopyrightViewComponent {
  readonly logo = LogoEnum.full;

  getCopyright() {
    return `© 2025 ${this.logo}. All Rights Reserved.`;
  }
}
