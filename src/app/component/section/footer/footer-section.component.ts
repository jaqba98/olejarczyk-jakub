import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { BaseSectionComponent } from '../base-section/base-section.component';

@Component({
  selector: 'footer-section',
  templateUrl: './footer-section.component.html',
  imports: [BaseSectionComponent],
})
@SectionDecorator('footer')
export class FooterSectionComponent {}
