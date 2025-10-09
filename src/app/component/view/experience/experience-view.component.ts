import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceBuilder } from '../../../builder/experience.builder';
// import { SectionDumbComponent } from '../../block/section/section-block.component';
// import { FlexDumbComponent } from '../../util/flex/flex-util.component';
// import { FlexItemDumbComponent } from '../../util/flex-item/flex-item-util.component';

@Component({
  selector: 'experience-view',
  templateUrl: './experience-view.component.html',
  styleUrl: './experience-view.component.scss',
  imports: [CommonModule],
  providers: [ExperienceBuilder],
})
export class ExperienceViewComponent {
  experience$;

  constructor(private readonly builder: ExperienceBuilder) {
    this.experience$ = this.builder.build();
  }
}
