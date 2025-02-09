import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';

@Component({ template: '' })
export class BaseComponent implements OnDestroy {
  private sub: Subscription;

  constructor(protected readonly store: Store) {
    this.sub = new Subscription();
  }

  addSub(sub: Subscription) {
    this.sub.add(sub);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
