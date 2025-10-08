import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceBuilder } from '../../../builder/experience.builder';
import { SectionDumbComponent } from '../../block/section/section-block.component';
import { FlexDumbComponent } from '../../dumb/flex/flex-dumb.component';
import { FlexItemDumbComponent } from '../../dumb/flex-item/flex-item-dumb.component';

@Component({
  selector: 'experience-view',
  templateUrl: './experience-view.component.html',
  styleUrl: './experience-view.component.scss',
  imports: [CommonModule, SectionDumbComponent, FlexDumbComponent, FlexItemDumbComponent],
  providers: [ExperienceBuilder],
})
export class ExperienceViewComponent {
  experience$;

  constructor(private readonly builder: ExperienceBuilder) {
    this.experience$ = this.builder.build();
  }
}
