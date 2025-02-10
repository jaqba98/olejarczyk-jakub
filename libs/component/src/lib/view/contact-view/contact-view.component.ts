import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseViewComponent } from '../base-view/base-view.component';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'lib-contact-view',
  imports: [CommonModule, BaseViewComponent],
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.scss',
})
export class ContactViewComponent extends BaseComponent {}
