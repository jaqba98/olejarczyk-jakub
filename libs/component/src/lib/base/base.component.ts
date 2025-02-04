import {
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Component,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { MediaEnum, MediaService } from '@olejarczyk-jakub/system';

@Component({
  template: '',
})
export class BaseComponent<TEvent> implements OnInit, OnDestroy {
  @Output() event = new EventEmitter<TEvent>();

  private sub!: Subscription;

  // I am here

  constructor(protected readonly media: MediaService) {}

  ngOnInit() {
    this.sub = this.media.media$.subscribe((media) => this.onInit(media));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onInit(media: MediaEnum) {
    throw new Error('Method not implemented!');
  }
}
