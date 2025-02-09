import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-button-dumb',
  imports: [CommonModule],
  templateUrl: './button-dumb.component.html',
  styleUrl: './button-dumb.component.scss',
})
export class ButtonDumbComponent {
  @Output() event = new EventEmitter<string>();

  @Input({ required: true }) label!: string;

  @Input({ required: true }) value!: string;

  @Input() active = false;

  onClick() {
    this.event.emit(this.value);
  }
}
