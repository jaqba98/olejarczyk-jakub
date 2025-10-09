import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TechnologyBuilder } from '../../../builder/technology.builder';
import { SectionBlockComponent } from '../../block/section/section-block.component';
import { HeadingTextComponent } from '../../text/heading/heading-text.component';
import { ColorType } from '../../../type/color.type';
import { FlexItemUtilComponent } from '../../util/flex-item/flex-item-util.component';
import { FlexUtilComponent } from '../../util/flex/flex-util.component';

@Component({
  selector: 'technology-view',
  templateUrl: './technology-view.component.html',
  styleUrl: './technology-view.component.scss',
  imports: [
    CommonModule,
    SectionBlockComponent,
    HeadingTextComponent,
    FlexItemUtilComponent,
    FlexUtilComponent,
  ],
  providers: [TechnologyBuilder],
})
export class TechnologyViewComponent {
  technology$;

  rootColor: ColorType = 'accent';

  constructor(private readonly builder: TechnologyBuilder) {
    this.technology$ = this.builder.build();
  }
}
