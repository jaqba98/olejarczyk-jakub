import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { switchMap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

import { LayoutStoreInitAction } from '../store/action/layout-store.action';
import { LayoutStoreState } from '../store/state/layout-store.state';
import { LayoutModel } from '../layout/model/layout.model';

@Component({
  selector: 'generator-component',
  templateUrl: './generator.component.html',
})
export class GeneratorComponent implements OnDestroy {
  sub: Subscription;

  layout!: LayoutModel;

  constructor(private readonly store: Store) {
    this.sub = this.store
      .dispatch(LayoutStoreInitAction)
      .pipe(switchMap(() => this.store.select(LayoutStoreState.getState)))
      .subscribe((state) => {
        this.layout = state;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
