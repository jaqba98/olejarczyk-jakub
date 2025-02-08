import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';

import { MenuState, MenuSwitchAction } from '@olejarczyk-jakub/store';
import { HamburgerDumbComponent } from '../../dumb/hamburger-dumb/hamburger-dumb.component';

@Component({
  selector: 'lib-hamburger-smart',
  imports: [HamburgerDumbComponent],
  templateUrl: './hamburger-smart.component.html',
})
export class HamburgerSmartComponent implements OnDestroy {
  isOpen = false;

  private sub: Subscription;

  constructor(private readonly store: Store) {
    this.sub = this.store.select(MenuState.getIsOpen).subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onClick() {
    this.store.dispatch(new MenuSwitchAction());
  }
}
