import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';

@Component({
  selector: 'nav-section-component',
  templateUrl: './nav-section.component.html',
})
@SectionDecorator('nav')
export class NavSectionComponent {}
