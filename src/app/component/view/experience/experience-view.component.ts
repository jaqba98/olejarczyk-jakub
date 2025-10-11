import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceBuilder } from '../../../builder/experience.builder';
import { SectionBlockComponent } from '../../block/section/section-block.component';

@Component({
  selector: 'experience-view',
  templateUrl: './experience-view.component.html',
  styleUrl: './experience-view.component.scss',
  imports: [CommonModule, SectionBlockComponent],
  providers: [ExperienceBuilder],
})
export class ExperienceViewComponent {
  experience$;

  constructor(private readonly builder: ExperienceBuilder) {
    this.experience$ = this.builder.build();
    this.builder.build().subscribe((i) => console.log(i));
  }
}
