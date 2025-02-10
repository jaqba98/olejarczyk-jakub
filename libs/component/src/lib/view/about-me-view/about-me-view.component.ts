import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseViewComponent } from '../base-view/base-view.component';

@Component({
  selector: 'lib-about-me-view',
  imports: [CommonModule, BaseViewComponent],
  templateUrl: './about-me-view.component.html',
  styleUrl: './about-me-view.component.scss',
})
export class AboutMeViewComponent {}
