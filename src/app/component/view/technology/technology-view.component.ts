import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TechnologyBuilder } from '../../../builder/technology.builder';
import { SectionBlockComponent } from '../../block/section/section-block.component';

@Component({
  selector: 'technology-view',
  templateUrl: './technology-view.component.html',
  styleUrl: './technology-view.component.scss',
  imports: [CommonModule, SectionBlockComponent],
  providers: [TechnologyBuilder],
})
export class TechnologyViewComponent {
  technology$;

  constructor(private readonly builder: TechnologyBuilder) {
    this.technology$ = this.builder.build();
  }
}
