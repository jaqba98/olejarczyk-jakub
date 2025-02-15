import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

import { EducationsModel, SectionEnum } from '@olejarczyk-jakub/model';
import { BaseViewComponent } from '../base-view/base-view.component';
import { TitleViewComponent } from '../title-view/title-view.component';
import { EducationItemSmartComponent } from '../../smart/education-item-smart/education-item-smart.component';
import { BaseComponent } from '../../base/base.component';
import { EducationsState } from '@olejarczyk-jakub/store';

@Component({
  selector: 'lib-education-view',
  imports: [
    CommonModule,
    BaseViewComponent,
    TitleViewComponent,
    EducationItemSmartComponent,
  ],
  templateUrl: './education-view.component.html',
  styleUrl: './education-view.component.scss',
})
export class EducationViewComponent extends BaseComponent {
  readonly id = SectionEnum.education;

  educations: EducationsModel['educations'] = [];

  constructor(protected override readonly store: Store) {
    super(store);
    this.addSub(
      this.store
        .select(EducationsState.getEducations)
        .subscribe((educations) => (this.educations = educations))
    );
  }
}
