import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';

@Component({
  selector: 'about-me-section-component',
  templateUrl: './about-me-section.component.html',
})
@SectionDecorator('aboutMe')
export class AboutMeSectionComponent {}
