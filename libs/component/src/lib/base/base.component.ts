import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';

import { MediaEnum } from '@olejarczyk-jakub/model';
import { SystemState } from '@olejarczyk-jakub/store';
import { mediaLessOrEqual, mediaMoreOrEqual } from '@olejarczyk-jakub/system';

@Component({ template: '' })
export class BaseComponent implements OnDestroy {
  private sub: Subscription;

  protected isMobile = true;

  protected moreOrEqualDesktop = false;

  constructor(protected readonly store: Store) {
    this.sub = new Subscription();
    this.initBaseComponent();
  }

  addSub(sub: Subscription) {
    this.sub.add(sub);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private initBaseComponent() {
    this.addSub(
      this.store.select(SystemState.getMedia).subscribe((media) => {
        this.isMobile = mediaLessOrEqual(media, MediaEnum.mobileLarge);
        this.moreOrEqualDesktop = mediaMoreOrEqual(media, MediaEnum.desktop);
      })
    );
  }
}
