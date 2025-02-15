import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SectionEnum } from '@olejarczyk-jakub/model';
import { BaseViewComponent } from '../base-view/base-view.component';
import { TitleViewComponent } from '../title-view/title-view.component';
import { TextSmartComponent } from '../../smart/text-smart/text-smart.component';

@Component({
  selector: 'lib-projects-view',
  imports: [
    CommonModule,
    BaseViewComponent,
    TitleViewComponent,
    TextSmartComponent,
  ],
  templateUrl: './projects-view.component.html',
  styleUrl: './projects-view.component.scss',
})
export class ProjectsViewComponent {
  readonly id = SectionEnum.projects;
}
