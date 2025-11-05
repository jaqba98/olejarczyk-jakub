import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { BaseSectionComponent } from '../base-section/base-section.component';

@Component({
  selector: 'about-me-section',
  templateUrl: './about-me-section.component.html',
  imports: [BaseSectionComponent],
})
@SectionDecorator('aboutMe')
export class AboutMeSectionComponent {}
