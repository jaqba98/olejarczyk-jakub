import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';

@Component({
  selector: 'project-section-component',
  templateUrl: './project-section.component.html',
})
@SectionDecorator('project')
export class ProjectSectionComponent {}
