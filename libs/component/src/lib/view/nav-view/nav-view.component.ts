import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { Store } from '@ngxs/store';

import { MenuSetIsOpenAction, MenuState } from '@olejarczyk-jakub/store';
import { LogoSmartComponent } from '../../smart/logo-smart/logo-smart.component';
import { HamburgerSmartComponent } from '../../smart/hamburger-smart/hamburger-smart.component';
import { MenuViewComponent } from '../menu-view/menu-view.component';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'lib-nav-view',
  imports: [
    CommonModule,
    LogoSmartComponent,
    HamburgerSmartComponent,
    MenuViewComponent,
  ],
  templateUrl: './nav-view.component.html',
  styleUrl: './nav-view.component.scss',
})
export class NavViewComponent extends BaseComponent {
  isOpen = false;

  constructor(
    protected override readonly store: Store,
    private readonly element: ElementRef
  ) {
    super(store);
    this.addSub(
      this.store
        .select(MenuState.getIsOpen)
        .subscribe((isOpen) => (this.isOpen = isOpen))
    );
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.element.nativeElement.contains(event.target)) {
      this.store.dispatch(new MenuSetIsOpenAction(false));
    }
  }

  getClassList() {
    return {
      'nav__space-around': this.moreOrEqualDesktop,
    };
  }
}
