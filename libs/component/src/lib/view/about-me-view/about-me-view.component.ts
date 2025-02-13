import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SectionEnum } from '@olejarczyk-jakub/model';
import { StyleOffDirective } from '../../base/style-off.directive';
import { BaseViewComponent } from '../base-view/base-view.component';
import { TextSmartComponent } from '../../smart/text-smart/text-smart.component';
import { TitleViewComponent } from '../title-view/title-view.component';

@Component({
  selector: 'lib-about-me-view',
  imports: [
    CommonModule,
    BaseViewComponent,
    TextSmartComponent,
    TitleViewComponent,
  ],
  templateUrl: './about-me-view.component.html',
  styleUrl: './about-me-view.component.scss',
  hostDirectives: [StyleOffDirective],
})
export class AboutMeViewComponent {
  readonly id = SectionEnum.aboutMe;
}
