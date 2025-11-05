import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { BaseSectionComponent } from '../base-section/base-section.component';

@Component({
  selector: 'project-section',
  templateUrl: './project-section.component.html',
  imports: [BaseSectionComponent],
})
@SectionDecorator('project')
export class ProjectSectionComponent {}
