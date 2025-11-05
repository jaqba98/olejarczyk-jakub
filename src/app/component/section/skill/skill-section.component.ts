import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';

@Component({
  selector: 'skill-section',
  templateUrl: './skill-section.component.html',
})
@SectionDecorator('skill')
export class SkillSectionComponent {}
