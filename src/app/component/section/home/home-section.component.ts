import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';

@Component({
  selector: 'home-section-component',
  templateUrl: './home-section.component.html',
})
@SectionDecorator('home')
export class HomeSectionComponent {}
