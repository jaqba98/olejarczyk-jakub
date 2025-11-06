import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { SkillStoreState } from '../../../store/state/skill-store.state';
import { SkillStoreModel } from '../../../store/model/store/skill-store.model';

@Component({
  selector: 'skill-section',
  templateUrl: './skill-section.component.html',
  imports: [CommonModule],
})
@SectionDecorator('skill')
export class SkillSectionComponent {
  state$: Observable<SkillStoreModel>;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(SkillStoreState.getState);
  }
}
