import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseViewComponent } from '../base-view/base-view.component';
import { BaseComponent } from '../../base/base.component';
import { TitleViewComponent } from '../title-view/title-view.component';

@Component({
  selector: 'lib-education-view',
  imports: [CommonModule, BaseViewComponent, TitleViewComponent],
  templateUrl: './education-view.component.html',
  styleUrl: './education-view.component.scss',
})
export class EducationViewComponent extends BaseComponent {}
