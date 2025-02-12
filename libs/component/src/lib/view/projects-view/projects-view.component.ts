import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponent } from '../../base/base.component';
import { BaseViewComponent } from '../base-view/base-view.component';
import { TitleViewComponent } from '../title-view/title-view.component';
import { SectionEnum } from '@olejarczyk-jakub/model';

@Component({
  selector: 'lib-projects-view',
  imports: [CommonModule, BaseViewComponent, TitleViewComponent],
  templateUrl: './projects-view.component.html',
  styleUrl: './projects-view.component.scss',
})
export class ProjectsViewComponent extends BaseComponent {
  id = SectionEnum.projects;
}
