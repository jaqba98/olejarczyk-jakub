import { Component } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Store } from '@ngxs/store';
import { CommonModule } from '@angular/common';

import { LayoutModel } from '../model/layout/layout.model';
import { Initiator } from '../initiator/initiator';
import { LayoutState } from '../state/layout.state';
import { Generator } from '../generator/generator';

import '../component/paragraph/paragraph.component';
import '../component/section/section.component';

@Component({
  selector: 'root',
  templateUrl: './root.html',
  imports: [CommonModule, Generator],
})
export class Root {
  layout$: Observable<LayoutModel>;

  constructor(
    private readonly initiator: Initiator,
    private readonly store: Store,
  ) {
    this.layout$ = this.initiator.init().pipe(
      switchMap(() => this.store.selectOnce(LayoutState.getState)),
      map((state) => state.layout),
    );
  }
}
