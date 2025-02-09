import { Component, Renderer2 } from '@angular/core';
import { Store } from '@ngxs/store';

import { MediaService } from '@olejarczyk-jakub/system';
import {
  MenuSetIsOpenAction,
  MenuState,
  SystemSetMediaAction,
} from '@olejarczyk-jakub/store';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'lib-system-smart',
  template: '',
})
export class SystemSmartComponent extends BaseComponent {
  constructor(
    protected override readonly store: Store,
    private readonly media: MediaService,
    private readonly renderer: Renderer2
  ) {
    super(store);
    this.addSub(
      this.media.media$.subscribe((media) => {
        this.store.dispatch(new SystemSetMediaAction(media));
        if (!this.isMobile) {
          this.store.dispatch(new MenuSetIsOpenAction(false));
        }
      })
    );
    this.addSub(
      this.store.select(MenuState.getIsOpen).subscribe((isOpen) => {
        const overflow = isOpen && this.isMobile ? 'hidden' : 'auto';
        this.renderer.setStyle(document.body, 'overflow', overflow);
      })
    );
  }
}
