import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { BaseSectionComponent } from '../base-section/base-section.component';

@Component({
  selector: 'resume-section',
  templateUrl: './resume-section.component.html',
  imports: [BaseSectionComponent],
})
@SectionDecorator('resume')
export class ResumeSectionComponent {}
