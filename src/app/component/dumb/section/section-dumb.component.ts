import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'section-dumb',
  templateUrl: './section-dumb.component.html',
  styleUrl: './section-dumb.component.scss',
  imports: [CommonModule],
})
export class SectionDumbComponent {
  color = input<'dominant' | 'complementary' | 'accent'>('dominant');

  buildClassNames() {
    return [`section__background--${this.color()}`];
  }
}
