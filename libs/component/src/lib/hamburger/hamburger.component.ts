import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'lib-hamburger',
  imports: [CommonModule],
  providers: [BaseComponent],
  templateUrl: './hamburger.component.html',
  styleUrl: './hamburger.component.scss',
})
export class HamburgerComponent extends BaseComponent<boolean> {
  @Input({ required: true }) size!: string;

  isOpen = false;

  onClick() {
    this.isOpen = !this.isOpen;
    this.event.emit(this.isOpen);
  }
}
