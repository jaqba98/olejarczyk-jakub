import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceBuilder } from '../../../builder/experience.builder';
import { SectionBlockComponent } from '../../block/section/section-block.component';

@Component({
  selector: 'experience-view',
  templateUrl: './experience-view.component.html',
  imports: [CommonModule, SectionBlockComponent],
  providers: [ExperienceBuilder],
})
export class ExperienceViewComponent {
  experience$;

  constructor(private readonly builder: ExperienceBuilder) {
    this.experience$ = this.builder.build();
  }
}
