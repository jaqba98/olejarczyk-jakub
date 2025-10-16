import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyBuilder } from '../../../builder/technology.builder';
import { SectionBlockComponent } from '../../block/section/section-block.component';
import { FlexItemUtilComponent } from '../../util/flex-item/flex-item-util.component';
import { HeadingTextComponent } from '../../text/heading/heading-text.component';
import { TechnologyDumbComponent } from '../../dumb/technology/technology-dumb.component';
import { FlexUtilComponent } from '../../util/flex/flex-util.component';

@Component({
  selector: 'technology-view',
  templateUrl: './technology-view.component.html',
  imports: [
    CommonModule,
    SectionBlockComponent,
    FlexItemUtilComponent,
    HeadingTextComponent,
    TechnologyDumbComponent,
    FlexUtilComponent,
  ],
  providers: [TechnologyBuilder],
})
export class TechnologyViewComponent {
  technologyView$;

  constructor(private readonly builder: TechnologyBuilder) {
    this.technologyView$ = this.builder.build();
  }
}
