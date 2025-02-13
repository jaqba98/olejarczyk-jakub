import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

import { MenuState } from '@olejarczyk-jakub/store';
import { MenuViewComponent } from '../menu-view/menu-view.component';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'lib-menu-mobile-view',
  imports: [CommonModule, MenuViewComponent],
  templateUrl: './menu-mobile-view.component.html',
  styleUrl: './menu-mobile-view.component.scss',
})
export class MenuMobileViewComponent extends BaseComponent {
  isOpen = false;

  constructor(protected override readonly store: Store) {
    super(store);
    this.addSub(
      this.store
        .select(MenuState.getIsOpen)
        .subscribe((isOpen) => (this.isOpen = isOpen))
    );
  }

  getClassList() {
    return {
      'menu-mobile__open': this.isOpen,
    };
  }
}
