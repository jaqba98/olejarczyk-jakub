import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-logo-dumb',
  templateUrl: './logo-dumb.component.html',
  styleUrl: './logo-dumb.component.scss',
})
export class LogoDumbComponent {
  @Input({ required: true }) title!: string;
}
