import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';

import { SectionStoreState } from '../../store/state/section-store.state';

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
      .pipe(map((state) => state.layout.sections));
  }
}
