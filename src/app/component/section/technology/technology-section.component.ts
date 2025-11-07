import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';

@Component({
  selector: 'technology-section-component',
  templateUrl: './technology-section.component.html',
})
@SectionDecorator('technology')
export class TechnologySectionComponent {}
