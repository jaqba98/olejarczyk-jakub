import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseViewComponent } from '../base-view/base-view.component';
import { TitleViewComponent } from '../title-view/title-view.component';
import { BaseComponent } from '../../base/base.component';
import { SectionEnum } from '@olejarczyk-jakub/model';

@Component({
  selector: 'lib-knowledge-view',
  imports: [CommonModule, BaseViewComponent, TitleViewComponent],
  templateUrl: './knowledge-view.component.html',
  styleUrl: './knowledge-view.component.scss',
})
export class KnowledgeViewComponent extends BaseComponent {
  id = SectionEnum.knowledge;
}
