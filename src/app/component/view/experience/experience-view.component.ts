import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceBuilder } from '../../../builder/experience.builder';
import { ParagraphDumbComponent } from '../../dumb/paragraph/paragraph-dumb.component';
import { SmallDumbComponent } from '../../dumb/small/small-dumb.component';
import { SectionDumbComponent } from '../../dumb/section/section-dumb.component';
import { MarginAutoDumbComponent } from '../../dumb/margin-auto/margin-auto-dumb.component';
import { ChildrenDumbComponent } from '../../dumb/children/children-dumb.component';
import { LineDumbComponent } from '../../dumb/line/line-dumb.component';
import { ChildDumbComponent } from '../../dumb/child/child-dumb.component';

@Component({
  selector: 'experience-view',
  templateUrl: './experience-view.component.html',
  styleUrl: './experience-view.component.scss',
  imports: [
    CommonModule,
    ParagraphDumbComponent,
    SmallDumbComponent,
    SectionDumbComponent,
    MarginAutoDumbComponent,
    ChildrenDumbComponent,
    LineDumbComponent,
    ChildDumbComponent,
  ],
  providers: [ExperienceBuilder],
})
export class ExperienceViewComponent {
  experiences$;

  constructor(private readonly builder: ExperienceBuilder) {
    this.experiences$ = this.builder.build();
  }
}
