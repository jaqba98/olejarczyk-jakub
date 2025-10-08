import { Component, input } from '@angular/core';

@Component({
  selector: 'icon-dumb',
  templateUrl: './icon-dumb.component.html',
  styleUrl: './icon-dumb.component.scss',
})
export class IconDumbComponent {
  className = input.required<string>();
}
