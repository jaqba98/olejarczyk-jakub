import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

import { MediaService } from '@olejarczyk-jakub/system';
import {
  MenuSetIsOpenAction,
  SystemSetMediaAction,
} from '@olejarczyk-jakub/store';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'lib-media-smart',
  template: '',
})
export class MediaSmartComponent extends BaseComponent {
  constructor(
    protected override readonly store: Store,
    private readonly media: MediaService
  ) {
    super(store);
    this.addSub(
      this.media.media$.subscribe((media) => {
        this.store.dispatch(new SystemSetMediaAction(media));
        if (!this.isMobile) {
          this.store.dispatch(new MenuSetIsOpenAction(false));
        }
      })
    );
  }
}
