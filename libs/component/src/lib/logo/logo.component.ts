import { Component } from '@angular/core';

import { MediaEnum, MediaService } from '@olejarczyk-jakub/system';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'lib-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent extends BaseComponent<void> {
  title!: string;

  private readonly fullname = 'Jakub Olejarczyk';

  private readonly initials = 'JO';

  constructor(protected override readonly media: MediaService) {
    super(media);
  }

  override onInit(media: MediaEnum) {
    this.title = this.media.lessOrEqual(media, MediaEnum.mobileSmall)
      ? this.initials
      : this.fullname;
  }
}
