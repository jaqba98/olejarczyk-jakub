import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceBuilder } from '../../../builder/experience.builder';
import { SectionBlockComponent } from '../../block/section/section-block.component';
import { FlexUtilComponent } from '../../util/flex/flex-util.component';
import { FlexItemUtilComponent } from '../../util/flex-item/flex-item-util.component';
import { HeadingTextComponent } from '../../text/heading/heading-text.component';
import { TechnologyDumbComponent } from '../../dumb/technology/technology-dumb.component';
import { MarkDumbComponent } from '../../dumb/mark/mark-dumb.component';
import { ParagraphTextComponent } from '../../text/paragraph/paragraph-text.component';
import { DateUtil } from '../../../util/date.util';

@Component({
  selector: 'experience-view',
  templateUrl: './experience-view.component.html',
  imports: [
    CommonModule,
    SectionBlockComponent,
    FlexUtilComponent,
    FlexItemUtilComponent,
    HeadingTextComponent,
    TechnologyDumbComponent,
    MarkDumbComponent,
    ParagraphTextComponent,
  ],
  providers: [ExperienceBuilder],
})
export class ExperienceViewComponent {
  experience$;

  constructor(
    private readonly builder: ExperienceBuilder,
    protected readonly dateUtil: DateUtil,
  ) {
    this.experience$ = this.builder.build();
  }
}
