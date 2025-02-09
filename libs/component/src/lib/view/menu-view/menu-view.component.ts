import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

import { SectionEnum, SectionLabelEnum } from '@olejarczyk-jakub/model';
import { ButtonSmartComponent } from '../../smart/button-smart/button-smart.component';
import { BaseComponent } from '../../base/base.component';
import { SystemSetSectionAction } from '@olejarczyk-jakub/store';

@Component({
  selector: 'lib-menu-view',
  imports: [CommonModule, ButtonSmartComponent],
  templateUrl: './menu-view.component.html',
  styleUrl: './menu-view.component.scss',
})
export class MenuViewComponent extends BaseComponent {
  constructor(protected override readonly store: Store) {
    super(store);
  }

  getOptions() {
    return Object.values(SectionEnum);
  }

  getLabel(section: SectionEnum) {
    return SectionLabelEnum[section];
  }

  onClick(event: string) {
    const section = event as SectionEnum;
    this.store.dispatch(new SystemSetSectionAction(section));
  }
}
