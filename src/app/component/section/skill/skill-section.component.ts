import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { SkillViewComponent } from '../../view/skill-section.component';
import { SkillStoreModel } from '../../../store/model/store/skill-store.model';
import { SkillStoreState } from '../../../store/state/skill-store.state';

@Component({
  selector: 'skill-section',
  template: `
    @if (state$ | async; as state) {
      <skill-view [model]="state"></skill-view>
    }
  `,
  imports: [CommonModule, SkillViewComponent],
})
@SectionDecorator('skill')
export class SkillSectionComponent {
  state$: Observable<SkillStoreModel>;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(SkillStoreState.getState);
  }
}
