import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { BaseSectionComponent } from '../base-section/base-section.component';

@Component({
  selector: 'skill-section',
  templateUrl: './skill-section.component.html',
  imports: [BaseSectionComponent],
})
@SectionDecorator('skill')
export class SkillSectionComponent {}
