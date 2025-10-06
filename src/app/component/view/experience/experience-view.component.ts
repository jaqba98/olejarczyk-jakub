import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceBuilder } from '../../../builder/experience.builder';

@Component({
  selector: 'experience-view',
  templateUrl: './experience-view.component.html',
  styleUrl: './experience-view.component.scss',
  imports: [CommonModule],
  providers: [ExperienceBuilder],
})
export class ExperienceViewComponent {
  experiences$;

  constructor(private readonly builder: ExperienceBuilder) {
    this.experiences$ = this.builder.build();
  }
}
