import { Component } from '@angular/core';

import { SectionDumbComponent } from '../../dumb/section/section-dumb.component';

@Component({
  selector: 'technology-view',
  templateUrl: './technology-view.component.html',
  styleUrl: './technology-view.component.scss',
  imports: [SectionDumbComponent],
})
export class TechnologyViewComponent {}
