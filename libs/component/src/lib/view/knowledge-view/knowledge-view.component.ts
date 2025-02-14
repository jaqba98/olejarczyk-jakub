import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SectionEnum } from '@olejarczyk-jakub/model';
import { BaseViewComponent } from '../base-view/base-view.component';
import { TitleViewComponent } from '../title-view/title-view.component';
import { TextSmartComponent } from '../../smart/text-smart/text-smart.component';

@Component({
  selector: 'lib-knowledge-view',
  imports: [
    CommonModule,
    BaseViewComponent,
    TitleViewComponent,
    TextSmartComponent,
  ],
  templateUrl: './knowledge-view.component.html',
  styleUrl: './knowledge-view.component.scss',
})
export class KnowledgeViewComponent {
  readonly id = SectionEnum.knowledge;
}
