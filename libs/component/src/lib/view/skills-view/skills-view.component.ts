import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

import { SkillsState } from '@olejarczyk-jakub/store';
import { SectionEnum, SkillModel } from '@olejarczyk-jakub/model';
import { BaseComponent } from '../../base/base.component';
import { BaseViewComponent } from '../base-view/base-view.component';
import { TitleViewComponent } from '../title-view/title-view.component';
import { SkillSmartComponent } from '../../smart/skill-smart/skill-smart.component';
import { TextSmartComponent } from '../../smart/text-smart/text-smart.component';

@Component({
  selector: 'lib-skills-view',
  imports: [
    CommonModule,
    BaseViewComponent,
    TitleViewComponent,
    SkillSmartComponent,
    TextSmartComponent,
  ],
  templateUrl: './skills-view.component.html',
  styleUrl: './skills-view.component.scss',
})
export class SkillsViewComponent extends BaseComponent {
  readonly id = SectionEnum.skills;

  skills: SkillModel[] = [];

  constructor(protected override readonly store: Store) {
    super(store);
    this.addSub(
      this.store
        .select(SkillsState.getSkills)
        .subscribe((skills) => (this.skills = skills))
    );
  }

  getClassList() {
    return {
      skills__large: !this.isMobile,
    };
  }
}
