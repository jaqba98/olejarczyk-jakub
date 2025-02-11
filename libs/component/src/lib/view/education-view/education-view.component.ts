import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseViewComponent } from '../base-view/base-view.component';
import { BaseComponent } from '../../base/base.component';
import { TitleViewComponent } from '../title-view/title-view.component';
import { EducationItemDumbComponent } from '../../dumb/education-item-dumb/education-item-dumb.component';

@Component({
  selector: 'lib-education-view',
  imports: [
    CommonModule,
    BaseViewComponent,
    TitleViewComponent,
    EducationItemDumbComponent,
  ],
  templateUrl: './education-view.component.html',
  styleUrl: './education-view.component.scss',
})
export class EducationViewComponent extends BaseComponent {}
