import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { BaseSectionComponent } from '../base-section/base-section.component';

@Component({
  selector: 'technology-section',
  templateUrl: './technology-section.component.html',
  imports: [BaseSectionComponent],
})
@SectionDecorator('technology')
export class TechnologySectionComponent {}
