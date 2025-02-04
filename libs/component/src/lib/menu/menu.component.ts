import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { MediaEnum, MediaService } from '@olejarczyk-jakub/system';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'lib-menu',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit, OnDestroy {
  @Input() horizontal = false;

  private sub!: Subscription;

  isVisible = false;

  constructor(private readonly media: MediaService) {}

  ngOnInit() {
    this.sub = this.media.media$.subscribe((media) => {
      if (this.horizontal) {
        this.isVisible = this.media.more(media, MediaEnum.mobileLarge);
      } else {
        this.isVisible = this.media.lessOrEqual(media, MediaEnum.mobileLarge);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
