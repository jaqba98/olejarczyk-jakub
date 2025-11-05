import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { BaseSectionComponent } from '../base-section/base-section.component';

@Component({
  selector: 'experience-section',
  templateUrl: './experience-section.component.html',
  imports: [BaseSectionComponent],
})
@SectionDecorator('experience')
export class ExperienceSectionComponent {}
