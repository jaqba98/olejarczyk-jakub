import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';

@Component({
  selector: 'resume-section-component',
  templateUrl: './resume-section.component.html',
})
@SectionDecorator('resume')
export class ResumeSectionComponent {}
