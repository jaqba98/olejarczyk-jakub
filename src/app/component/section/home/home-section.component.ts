import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { BaseSectionComponent } from '../base-section/base-section.component';

@Component({
  selector: 'home-section',
  templateUrl: './home-section.component.html',
  imports: [BaseSectionComponent],
})
@SectionDecorator('home')
export class HomeSectionComponent {}
