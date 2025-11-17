import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { combineLatest, switchMap, take } from 'rxjs';

import { DomainState } from '../../state/domain.state';
import { LayoutStateInitAction } from '../../action/state-init.action';

@Injectable({ providedIn: 'root' })
export class LayoutInitiator {
  constructor(private readonly store: Store) {}

  init() {
    return combineLatest([this.store.selectOnce(DomainState.getState)]).pipe(
      switchMap(([state]) => {
        return this.store.dispatch(
          new LayoutStateInitAction({
            model: {
              kind: 'group',
              children: [
                {
                  kind: 'leaf',
                  domain: {
                    kind: 'paragraph',
                    data: state.copyright.data,
                    metadata: state.copyright.metadata,
                    appearance: state.copyright.appearance,
                  },
                },
              ],
              mode: 'after',
            },
          }),
        );
      }),
      take(1),
    );
  }
}
