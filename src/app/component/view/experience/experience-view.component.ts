import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextDumbComponent } from '../../dumb/text/text-dumb.component';
import { ExperienceViewService } from './experience-view.service';

@Component({
  selector: 'experience-view',
  templateUrl: './experience-view.component.html',
  styleUrl: './experience-view.component.scss',
  imports: [CommonModule, TextDumbComponent],
  providers: [ExperienceViewService],
})
export class ExperienceViewComponent {
  experiences$;

  constructor(private readonly experienceViewService: ExperienceViewService) {
    this.experiences$ = this.experienceViewService.getExperiences();
  }
}
