import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import { LayoutStoreInitAction } from '../store/action/layout-store.action';
import { LayoutStoreState } from '../store/state/layout-store.state';
import { LayoutModel } from '../layout/model/layout.model';
import { GeneratorComponent } from '../component/generator/generator.component';

import '../component/group/group.component';
import '../component/leaf/leaf.component';

import '../component/data/empty/empty.component';
import '../component/data/section/section.component';

@Component({
  selector: 'root',
  templateUrl: './root.html',
  imports: [CommonModule, GeneratorComponent],
})
export class Root {
  state$: Observable<LayoutModel>;

  constructor(private readonly store: Store) {
    this.state$ = this.store
      .dispatch(LayoutStoreInitAction)
      .pipe(switchMap(() => this.store.select(LayoutStoreState.getState)));
  }
}
