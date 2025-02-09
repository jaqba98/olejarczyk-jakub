import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';

import { SectionEnum, SectionLabelEnum } from '@olejarczyk-jakub/model';
import { ButtonSmartComponent } from '../../smart/button-smart/button-smart.component';
import { BaseComponent } from '../../base/base.component';
import { SystemSetSectionAction, SystemState } from '@olejarczyk-jakub/store';

@Component({
  selector: 'lib-menu-view',
  imports: [CommonModule, ButtonSmartComponent],
  templateUrl: './menu-view.component.html',
  styleUrl: './menu-view.component.scss',
})
export class MenuViewComponent extends BaseComponent {
  @Input() vertical = false;

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

  getActive(section: SectionEnum) {
    return section === this.section;
  }

  onClick(event: string) {
    const section = event as SectionEnum;
    this.store.dispatch(new SystemSetSectionAction(section));
  }
}
