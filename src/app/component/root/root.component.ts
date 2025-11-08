import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { map } from 'rxjs/operators';

import { SectionStoreState } from '../../store/state/section-store.state';
import { getSection } from '../../decorator/section.decorator';

import '../section';

@Component({
  selector: 'root-component',
  templateUrl: './root.component.html',
  imports: [CommonModule],
})
export class RootComponent {
  sections$;

  constructor(private readonly store: Store) {
    this.sections$ = this.store
      .select(SectionStoreState.getState)
      .pipe(
        map((state) => state.section.sections.map((section) => getSection(section.metadata.type))),
      );
  }
}
