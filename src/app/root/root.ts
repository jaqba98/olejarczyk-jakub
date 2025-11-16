import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { from, Observable } from 'rxjs';

// import { LayoutStoreState } from '../state/state/layout-store.state';
import { LayoutModel } from '../layout/model/layout.model';
import { Generator } from '../generator/generator';

import '../component/domain/paragraph/paragraph.component';
import '../component/domain/section/section.component';
// import { InitRawStoreAction } from '../action/state-init.action';

@Component({
  selector: 'root',
  templateUrl: './root.html',
  imports: [CommonModule, Generator],
})
export class Root {
  // state$;

  constructor(private readonly store: Store) {
    // this.state$ = this.store.select(LayoutStoreState.getState);
    // from(this.store.dispatch(new InitRawStoreAction()));
  }
}
