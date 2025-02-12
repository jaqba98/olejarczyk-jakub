import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';

import { SkillsState } from '@olejarczyk-jakub/store';
import { SectionEnum, SkillModel } from '@olejarczyk-jakub/model';
import { BaseComponent } from '../../base/base.component';
import { BaseViewComponent } from '../base-view/base-view.component';
import { TitleViewComponent } from '../title-view/title-view.component';

@Component({
  selector: 'lib-skills-view',
  imports: [CommonModule, BaseViewComponent, TitleViewComponent],
  templateUrl: './skills-view.component.html',
  styleUrl: './skills-view.component.scss',
})
export class SkillsViewComponent extends BaseComponent {
  id = SectionEnum.skills;

  skills: SkillModel[];

  constructor(protected override readonly store: Store) {
    super(store);
    this.skills = this.store.selectSnapshot(SkillsState.getSkills);
  }
}
