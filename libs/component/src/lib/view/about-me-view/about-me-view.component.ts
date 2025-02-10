import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseViewComponent } from '../base-view/base-view.component';
import { StyleOffDirective } from '../../base/style-off.directive';
import { TitleViewComponent } from '../title-view/title-view.component';

@Component({
  selector: 'lib-about-me-view',
  imports: [CommonModule, BaseViewComponent, TitleViewComponent],
  templateUrl: './about-me-view.component.html',
  styleUrl: './about-me-view.component.scss',
  hostDirectives: [StyleOffDirective],
})
export class AboutMeViewComponent {}
