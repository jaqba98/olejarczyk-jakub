import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';

@Component({
  selector: 'experience-section',
  templateUrl: './experience-section.component.html',
})
@SectionDecorator('experience')
export class ExperienceSectionComponent {}
