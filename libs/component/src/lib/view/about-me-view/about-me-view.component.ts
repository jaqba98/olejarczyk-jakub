import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseViewComponent } from '../base-view/base-view.component';
import { StyleOffDirective } from '../../base/style-off.directive';
import { TitleViewComponent } from '../title-view/title-view.component';
import { SectionEnum } from '@olejarczyk-jakub/model';
import { TextSmartComponent } from '../../smart/text-smart/text-smart.component';

@Component({
  selector: 'lib-about-me-view',
  imports: [
    CommonModule,
    BaseViewComponent,
    TitleViewComponent,
    TextSmartComponent,
  ],
  templateUrl: './about-me-view.component.html',
  styleUrl: './about-me-view.component.scss',
  hostDirectives: [StyleOffDirective],
})
export class AboutMeViewComponent {
  id = SectionEnum.aboutMe;
}
