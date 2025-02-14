import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faCar, faComments } from '@fortawesome/free-solid-svg-icons';

import { SectionEnum } from '@olejarczyk-jakub/model';
import { BaseViewComponent } from '../base-view/base-view.component';
import { TitleViewComponent } from '../title-view/title-view.component';
import { TextSmartComponent } from '../../smart/text-smart/text-smart.component';
import { IconSmartComponent } from '../../smart/icon-smart/icon-smart.component';

@Component({
  selector: 'lib-knowledge-view',
  imports: [
    CommonModule,
    BaseViewComponent,
    TitleViewComponent,
    TextSmartComponent,
    IconSmartComponent,
  ],
  templateUrl: './knowledge-view.component.html',
  styleUrl: './knowledge-view.component.scss',
})
export class KnowledgeViewComponent {
  readonly id = SectionEnum.knowledge;

  readonly faComments = faComments;

  readonly faCar = faCar;
}
