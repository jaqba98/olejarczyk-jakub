import { Component, input } from '@angular/core';

// import { IconDumbComponent } from '../../text/icon/icon-text.component';
// import { HeaderDumbComponent } from '../../text/header/header-text.component';

@Component({
  selector: 'technology-dumb',
  templateUrl: './technology-dumb.component.html',
  styleUrl: './technology-dumb.component.scss',
  // imports: [IconDumbComponent],
})
export class TechnologyDumbComponent {
  name = input.required<string>();

  className = input.required<string>();
}
