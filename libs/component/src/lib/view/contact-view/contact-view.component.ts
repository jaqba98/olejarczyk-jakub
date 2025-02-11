import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { BaseComponent } from '../../base/base.component';
import { BaseViewComponent } from '../base-view/base-view.component';
import { ContactItemDumbComponent } from '../../dumb/contact-item-dumb/contact-item-dumb.component';
import { TitleViewComponent } from '../title-view/title-view.component';

@Component({
  selector: 'lib-contact-view',
  imports: [
    CommonModule,
    BaseViewComponent,
    ContactItemDumbComponent,
    TitleViewComponent,
  ],
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.scss',
})
export class ContactViewComponent extends BaseComponent {
  faEnvelope = faEnvelope;

  faPhone = faPhone;

  faLocationDot = faLocationDot;

  faLinkedin = faLinkedin;

  faGithub = faGithub;
}
