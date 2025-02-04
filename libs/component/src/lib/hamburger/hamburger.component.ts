import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { MediaEnum, MediaService } from '@olejarczyk-jakub/system';

@Component({
  selector: 'lib-hamburger',
  imports: [CommonModule],
  templateUrl: './hamburger.component.html',
  styleUrl: './hamburger.component.scss',
})
export class HamburgerComponent implements OnInit, OnDestroy {
  @Output() clickEvent = new EventEmitter<boolean>();

  isVisible = true;

  isOpen = false;

  private sub!: Subscription;

  constructor(private readonly media: MediaService) {}

  ngOnInit() {
    this.sub = this.media.media$.subscribe((media) => {
      if (this.media.lessOrEqual(media, MediaEnum.mobileSmall)) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
        this.isOpen = false;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onClick() {
    this.isOpen = !this.isOpen;
    this.clickEvent.emit(this.isOpen);
  }
}
