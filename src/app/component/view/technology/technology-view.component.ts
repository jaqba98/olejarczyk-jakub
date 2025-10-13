import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyBuilder } from '../../../builder/technology.builder';
import { SectionBlockComponent } from '../../block/section/section-block.component';

@Component({
  selector: 'technology-view',
  templateUrl: './technology-view.component.html',
  imports: [CommonModule, SectionBlockComponent],
  providers: [TechnologyBuilder],
})
export class TechnologyViewComponent {
  technology$;

  constructor(private readonly builder: TechnologyBuilder) {
    this.technology$ = this.builder.build();
  }
}
