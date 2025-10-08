import { Component } from '@angular/core';

import { SectionDumbComponent } from '../../dumb/section/section-dumb.component';
import { TechnologyBuilder } from '../../../builder/technology.builder';

@Component({
  selector: 'technology-view',
  templateUrl: './technology-view.component.html',
  styleUrl: './technology-view.component.scss',
  imports: [SectionDumbComponent],
  providers: [TechnologyBuilder],
})
export class TechnologyViewComponent {
  constructor(private readonly builder: TechnologyBuilder) {
    this.builder.build().subscribe((technology) => {
      console.log(technology);
    });
  }
}
