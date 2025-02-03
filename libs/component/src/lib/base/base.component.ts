import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()
export class BaseComponent<TEvent> {
  @Output() event: EventEmitter<TEvent> = new EventEmitter();
}
