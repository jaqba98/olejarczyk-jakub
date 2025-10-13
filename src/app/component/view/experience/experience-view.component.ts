import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceBuilder } from '../../../builder/experience.builder';
import { SectionBlockComponent } from '../../block/section/section-block.component';
import { FlexUtilComponent } from '../../util/flex/flex-util.component';
import { FlexItemUtilComponent } from '../../util/flex-item/flex-item-util.component';

@Component({
  selector: 'experience-view',
  templateUrl: './experience-view.component.html',
  imports: [CommonModule, SectionBlockComponent, FlexUtilComponent, FlexItemUtilComponent],
  providers: [ExperienceBuilder],
})
export class ExperienceViewComponent {
  experience$;

  constructor(private readonly builder: ExperienceBuilder) {
    this.experience$ = this.builder.build();
  }
}
