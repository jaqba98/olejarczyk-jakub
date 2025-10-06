import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceBuilder } from '../../../builder/experience.builder';
import { ParagraphDumbComponent } from '../../dumb/paragraph/paragraph-dumb.component';
import { SmallDumbComponent } from '../../dumb/small/small-dumb.component';
import { SectionDumbComponent } from '../../dumb/section/section-dumb.component';
import { ContentDumbComponent } from '../../dumb/content/content-dumb.component';

@Component({
  selector: 'experience-view',
  templateUrl: './experience-view.component.html',
  styleUrl: './experience-view.component.scss',
  imports: [
    CommonModule,
    ParagraphDumbComponent,
    SmallDumbComponent,
    SectionDumbComponent,
    ContentDumbComponent,
  ],
  providers: [ExperienceBuilder],
})
export class ExperienceViewComponent {
  experiences$;

  constructor(private readonly builder: ExperienceBuilder) {
    this.experiences$ = this.builder.build();
  }
}
