import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyBuilder } from '../../../builder/technology.builder';

@Component({
  selector: 'technology-view',
  templateUrl: './technology-view.component.html',
  imports: [CommonModule],
  providers: [TechnologyBuilder],
})
export class TechnologyViewComponent {
  technology$;

  constructor(private readonly builder: TechnologyBuilder) {
    this.technology$ = this.builder.build();
  }
}
