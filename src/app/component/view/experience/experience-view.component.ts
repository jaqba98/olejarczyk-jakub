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

  constructor(private readonly builder: ExperienceBuilder) {
    this.experience$ = this.builder.build();
  }

  buildDate(startDate: Date, endDate: Date | null) {
    const startObject = this.buildDateObject(startDate);
    const startString = this.buildDateString(startObject.year, startObject.month, startObject.day);
    if (endDate) {
      const endObject = this.buildDateObject(endDate);
      const endString = this.buildDateString(endObject.year, endObject.month, endObject.day);
      return `${startString} • ${endString}`;
    }
    return `${startString} • Current`;
  }

  private buildDateObject(date: Date) {
    return {
      year: String(date.getUTCFullYear()),
      month: String(date.getUTCMonth() + 1).padStart(2, '0'),
      day: String(date.getUTCDay()).padStart(2, '0'),
    };
  }

  private buildDateString(year: string, month: string, day: string) {
    return `${year}-${month}-${day}`;
  }
}
