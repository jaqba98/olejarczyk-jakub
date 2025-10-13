import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceBuilder } from '../../../builder/experience.builder';

@Component({
  selector: 'experience-view',
  templateUrl: './experience-view.component.html',
  imports: [CommonModule],
  providers: [ExperienceBuilder],
})
export class ExperienceViewComponent {
  experience$;

  constructor(private readonly builder: ExperienceBuilder) {
    this.experience$ = this.builder.build();
  }
}
