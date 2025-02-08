import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaEnum, MediaService } from '@olejarczyk-jakub/system';
import { LogoComponent } from '../logo/logo.component';
import { MenuComponent } from '../menu/menu.component';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'lib-nav',
  imports: [CommonModule, LogoComponent, MenuComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent extends BaseComponent<void> {
  spaceAround = false;

  menuIsVisible = false;

  menuIsActive = false;

  constructor(protected override readonly media: MediaService) {
    super(media);
  }

  override onInit(media: MediaEnum): void {
    this.spaceAround = this.media.moreOrEqual(media, MediaEnum.tablet);
    if (this.media.lessOrEqual(media, MediaEnum.mobileLarge)) {
      this.menuIsActive = true;
    } else {
      this.menuIsActive = false;
      this.menuIsVisible = false;
    }
  }

  onClick(event: boolean) {
    this.menuIsVisible = event;
  }
}
