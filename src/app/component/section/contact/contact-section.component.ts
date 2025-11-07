import { Component } from '@angular/core';

import { SectionDecorator } from '../../../decorator/section.decorator';

@Component({
  selector: 'contact-section-component',
  templateUrl: './contact-section.component.html',
})
@SectionDecorator('contact')
export class ContactSectionComponent {}
