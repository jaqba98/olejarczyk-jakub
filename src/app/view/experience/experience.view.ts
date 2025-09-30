import { Component } from '@angular/core';

import { ExperienceService } from './experience.service';

@Component({
  selector: 'view-experience',
  templateUrl: './experience.view.html',
  styleUrl: './experience.view.scss',
  providers: [ExperienceService],
})
export class ExperienceView {
  constructor(private readonly experience: ExperienceService) {
    this.experience.getExperiences().subscribe(([states, experiences]) => {
      console.log(states, experiences);
    });
  }
}
