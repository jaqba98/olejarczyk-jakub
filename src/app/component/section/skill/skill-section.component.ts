import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { SkillStoreState } from '../../../store/state/skill-store.state';
import { SkillStoreModel } from '../../../store/model/store/skill-store.model';
import { ViewComponent } from '../../view/view.component';

@Component({
  selector: 'skill-section',
  template: '<view [state]="state$ | async"></view>',
  imports: [CommonModule, ViewComponent],
})
@SectionDecorator('skill')
export class SkillSectionComponent {
  state$: Observable<SkillStoreModel>;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(SkillStoreState.getState);
  }
}
