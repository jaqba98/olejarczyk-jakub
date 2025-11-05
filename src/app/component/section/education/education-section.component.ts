import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { BaseSectionComponent } from '../base-section/base-section.component';

@Component({
  selector: 'education-section',
  templateUrl: './education-section.component.html',
  imports: [BaseSectionComponent],
})
@SectionDecorator('education')
export class EducationSectionComponent {}
