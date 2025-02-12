import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

import {
  MenuSetLogoAction,
  MenuState,
  SystemState,
} from '@olejarczyk-jakub/store';
import { mediaLessOrEqual } from '@olejarczyk-jakub/system';
import { MediaEnum, LogoEnum } from '@olejarczyk-jakub/model';
import { LogoDumbComponent } from '../../dumb/logo-dumb/logo-dumb.component';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'lib-logo-smart',
  imports: [LogoDumbComponent],
  templateUrl: './logo-smart.component.html',
})
export class LogoSmartComponent extends BaseComponent {
  logo = '';

  constructor(protected override readonly store: Store) {
    super(store);
    this.addSub(
      this.store
        .select(MenuState.getLogo)
        .subscribe((logo) => (this.logo = logo))
    );
    this.addSub(
      this.store.select(SystemState.getMedia).subscribe((media) => {
        const newLogo = mediaLessOrEqual(media, MediaEnum.tablet)
          ? LogoEnum.short
          : LogoEnum.full;
        this.store.dispatch(new MenuSetLogoAction(newLogo));
      })
    );
  }
}
