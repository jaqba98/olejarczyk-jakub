import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngxs/store';

import { MediaService } from '@olejarczyk-jakub/system';
import { SystemSetMediaAction } from '@olejarczyk-jakub/store';

@Component({
  selector: 'lib-media-smart',
  template: '',
})
export class MediaSmartComponent implements OnDestroy {
  private sub: Subscription;

  constructor(
    private readonly media: MediaService,
    private readonly store: Store
  ) {
    this.sub = this.media.media$.subscribe((media) => {
      this.store.dispatch(new SystemSetMediaAction(media));
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
