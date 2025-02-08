import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-hamburger-dumb',
  imports: [CommonModule],
  templateUrl: './hamburger-dumb.component.html',
  styleUrl: './hamburger-dumb.component.scss',
})
export class HamburgerDumbComponent {
  @Output() event = new EventEmitter<boolean>();

  @Input() isOpen = false;

  onClick() {
    this.event.emit(true);
  }
}
