import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

import { MenuState, MenuSwitchAction } from '@olejarczyk-jakub/store';
import { HamburgerDumbComponent } from '../../dumb/hamburger-dumb/hamburger-dumb.component';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'lib-hamburger-smart',
  imports: [HamburgerDumbComponent],
  templateUrl: './hamburger-smart.component.html',
})
export class HamburgerSmartComponent extends BaseComponent {
  isOpen = false;

  constructor(protected override readonly store: Store) {
    super(store);
    this.addSub(
      this.store.select(MenuState.getIsOpen).subscribe((isOpen) => {
        this.isOpen = isOpen;
      })
    );
  }

  onClick() {
    this.store.dispatch(new MenuSwitchAction());
  }
}
