import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ExperienceService } from './experience.service';
import { TextDumbComponent } from '../../component/dumb/text/text-dumb.component';

@Component({
  selector: 'view-experience',
  templateUrl: './experience.view.html',
  styleUrl: './experience.view.scss',
  imports: [CommonModule, TextDumbComponent],
  providers: [ExperienceService],
})
export class ExperienceView {
  experiences$;

  constructor(private readonly experience: ExperienceService) {
    this.experiences$ = this.experience.getExperiences();
  }
}
