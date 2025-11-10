import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, switchMap } from 'rxjs/operators';

import { LayoutStoreInitAction } from '../store/action/layout-store.action';
import { LayoutStoreState } from '../store/state/layout-store.state';

@Component({
  selector: 'generator-component',
  templateUrl: './generator.component.html',
})
export class GeneratorComponent {
  state$;

  constructor(private readonly store: Store) {
    this.state$ = this.store.dispatch(LayoutStoreInitAction).pipe(
      switchMap(() => this.store.select(LayoutStoreState.getState)),
      map((state) => {
        console.log(state);
        return state;
      }),
    );
  }
}
