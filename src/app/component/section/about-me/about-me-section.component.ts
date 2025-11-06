import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { AboutMeStoreState } from '../../../store/state/about-me-store.state';
import { AboutMeStoreModel } from '../../../store/model/store/about-me-store.model';

@Component({
  selector: 'about-me-section',
  templateUrl: './about-me-section.component.html',
  imports: [CommonModule],
})
@SectionDecorator('aboutMe')
export class AboutMeSectionComponent {
  state$: Observable<AboutMeStoreModel>;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(AboutMeStoreState.getState);
  }
}
