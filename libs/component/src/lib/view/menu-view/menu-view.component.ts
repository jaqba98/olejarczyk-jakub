import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

import { SectionEnum, SectionLabelEnum } from '@olejarczyk-jakub/model';
import {
  MenuSetIsOpenAction,
  SystemSetSectionAction,
  SystemState,
} from '@olejarczyk-jakub/store';
import { ButtonSmartComponent } from '../../smart/button-smart/button-smart.component';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'lib-menu-view',
  imports: [CommonModule, ButtonSmartComponent],
  templateUrl: './menu-view.component.html',
  styleUrl: './menu-view.component.scss',
})
export class MenuViewComponent extends BaseComponent {
  section = SectionEnum.home;

  constructor(protected override readonly store: Store) {
    super(store);
    this.addSub(
      this.store.select(SystemState.getSection).subscribe((section) => {
        this.section = section;
      })
    );
  }

  getOptions() {
    return Object.values(SectionEnum);
  }

  getLabel(section: SectionEnum) {
    return SectionLabelEnum[section];
  }

  getIsPressed(section: SectionEnum) {
    return section === this.section;
  }

  onEvent(event: SectionEnum) {
    this.store.dispatch(new SystemSetSectionAction(event));
    this.store.dispatch(new MenuSetIsOpenAction(false));
    this.scrollTo(event);
  }

  private scrollTo(section: SectionEnum) {
    const element = document.getElementById(section);
    if (element) {
      const offset = 75;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  }
}
