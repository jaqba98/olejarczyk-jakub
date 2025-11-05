import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';

@Component({
  selector: 'education-section',
  templateUrl: './education-section.component.html',
})
@SectionDecorator('education')
export class EducationSectionComponent {}
