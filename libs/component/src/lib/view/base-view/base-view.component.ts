import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-base-view',
  imports: [CommonModule],
  templateUrl: './base-view.component.html',
  styleUrl: './base-view.component.scss',
})
export class BaseViewComponent {
  @Input({ required: true }) title!: string;

  @Input() primaryBackground = false;
}
