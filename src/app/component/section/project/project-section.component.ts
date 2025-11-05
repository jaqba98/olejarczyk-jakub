import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';

@Component({
  selector: 'project-section',
  templateUrl: './project-section.component.html',
})
@SectionDecorator('project')
export class ProjectSectionComponent {}
