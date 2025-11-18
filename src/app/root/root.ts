import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Generator } from '../generator/generator';
import { Initiator } from '../initiator/initiator';
import { LayoutState } from '../state/layout.state';
import { LayoutModel } from '../model/layout/layout.model';

import '../component/paragraph/paragraph.component';
import '../component/section/section.component';

@Component({
  selector: 'root',
  templateUrl: './root.html',
  imports: [CommonModule, Generator],
})
export class Root {
  model$: Observable<LayoutModel>;

  constructor(
    private readonly initiator: Initiator,
    private readonly store: Store,
  ) {
    this.model$ = this.initiator.init().pipe(
      switchMap(() => this.store.selectOnce(LayoutState.getState)),
      map((state) => state.model),
    );
  }
}
