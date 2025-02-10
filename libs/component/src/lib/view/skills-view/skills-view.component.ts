import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';

import { SkillsState } from '@olejarczyk-jakub/store';
import { SkillModel } from '@olejarczyk-jakub/model';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'lib-skills-view',
  imports: [CommonModule],
  templateUrl: './skills-view.component.html',
  styleUrl: './skills-view.component.scss',
})
export class SkillsViewComponent extends BaseComponent {
  skills: SkillModel[];

  constructor(protected override readonly store: Store) {
    super(store);
    this.skills = this.store.selectSnapshot(SkillsState.getSkills);
  }
}
