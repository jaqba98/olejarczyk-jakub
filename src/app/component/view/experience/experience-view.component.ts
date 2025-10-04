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
  constructor(private readonly builder: ExperienceBuilder) {
    this.builder.build().subscribe((experiences) => {
      console.log(experiences);
    });
  }
}
