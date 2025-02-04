import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaEnum, MediaService } from '@olejarczyk-jakub/system';
import { ButtonComponent } from '../button/button.component';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'lib-menu',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent extends BaseComponent<void> {
  @Input() horizontal = false;

  isVisible = false;

  constructor(protected override readonly media: MediaService) {
    super(media);
  }

  override onInit(media: MediaEnum): void {
    if (this.horizontal) {
      this.isVisible = this.media.more(media, MediaEnum.mobileLarge);
    } else {
      this.isVisible = this.media.lessOrEqual(media, MediaEnum.mobileLarge);
    }
  }
}
