import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';

@Component({
  selector: 'footer-section',
  templateUrl: './footer-section.component.html',
})
@SectionDecorator('footer')
export class FooterSectionComponent {}
