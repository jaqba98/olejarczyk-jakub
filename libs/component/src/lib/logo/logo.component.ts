import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  @Input({ required: true }) title!: string;
}
