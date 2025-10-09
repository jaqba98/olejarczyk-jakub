import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyBuilder } from '../../../builder/technology.builder';
// import { SectionDumbComponent } from '../../block/section/section-block.component';
// import { FlexDumbComponent } from '../../util/flex/flex-util.component';
import { TechnologyDumbComponent } from '../../dumb/technology/technology-dumb.component';

@Component({
  selector: 'technology-view',
  templateUrl: './technology-view.component.html',
  styleUrl: './technology-view.component.scss',
  imports: [
    CommonModule,
    // SectionDumbComponent,
    // FlexDumbComponent,
    TechnologyDumbComponent,
  ],
  providers: [TechnologyBuilder],
})
export class TechnologyViewComponent {
  technology$;

  constructor(private readonly builder: TechnologyBuilder) {
    this.technology$ = this.builder.build();
  }
}
