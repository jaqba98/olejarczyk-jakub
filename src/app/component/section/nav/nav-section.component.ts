import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { BaseSectionComponent } from '../base-section/base-section.component';

@Component({
  selector: 'nav-section',
  templateUrl: './nav-section.component.html',
  imports: [BaseSectionComponent],
})
@SectionDecorator('nav')
export class NavSectionComponent {}
