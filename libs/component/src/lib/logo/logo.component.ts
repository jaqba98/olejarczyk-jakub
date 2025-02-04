import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MediaEnum, MediaService } from '@olejarczyk-jakub/system';

@Component({
  selector: 'lib-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent implements OnInit, OnDestroy {
  title!: string;

  private readonly fullname = 'Jakub Olejarczyk';

  private readonly initials = 'JO';

  private sub!: Subscription;

  constructor(private readonly media: MediaService) {}

  ngOnInit() {
    this.sub = this.media.media$.subscribe((media) => {
      this.title = this.media.lessOrEqual(media, MediaEnum.mobileSmall)
        ? this.initials
        : this.fullname;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
