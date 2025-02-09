import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

import {
  MenuSetTitleAction,
  MenuState,
  SystemState,
} from '@olejarczyk-jakub/store';
import { mediaLessOrEqual } from '@olejarczyk-jakub/system';
import { MediaEnum, TitleEnum } from '@olejarczyk-jakub/model';
import { LogoDumbComponent } from '../../dumb/logo-dumb/logo-dumb.component';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'lib-logo-smart',
  imports: [LogoDumbComponent],
  templateUrl: './logo-smart.component.html',
})
export class LogoSmartComponent extends BaseComponent {
  title!: string;

  constructor(protected override readonly store: Store) {
    super(store);
    this.addSub(
      this.store
        .select(MenuState.getTitle)
        .subscribe((title) => (this.title = title))
    );
    this.addSub(
      this.store.select(SystemState.getMedia).subscribe((media) => {
        const newTitle = mediaLessOrEqual(media, MediaEnum.tablet)
          ? TitleEnum.short
          : TitleEnum.long;
        this.store.dispatch(new MenuSetTitleAction(newTitle));
      })
    );
  }
}
