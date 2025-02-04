import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MediaEnum, MediaService } from '@olejarczyk-jakub/system';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'lib-hamburger',
  imports: [CommonModule],
  templateUrl: './hamburger.component.html',
  styleUrl: './hamburger.component.scss',
})
export class HamburgerComponent extends BaseComponent<boolean> {
  isVisible = true;

  isOpen = false;

  constructor(protected override readonly media: MediaService) {
    super(media);
  }

  override onInit(media: MediaEnum) {
    if (this.media.lessOrEqual(media, MediaEnum.mobileLarge)) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
      this.isOpen = false;
      this.event.emit(this.isOpen);
    }
  }

  onClick() {
    this.isOpen = !this.isOpen;
    this.event.emit(this.isOpen);
  }
}
