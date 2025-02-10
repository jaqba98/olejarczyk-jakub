import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseViewComponent } from '../base-view/base-view.component';
import { StyleOffDirective } from '../../base/style-off.directive';

@Component({
  selector: 'lib-experience-view',
  imports: [CommonModule, BaseViewComponent],
  templateUrl: './experience-view.component.html',
  styleUrl: './experience-view.component.scss',
  hostDirectives: [StyleOffDirective],
})
export class ExperienceViewComponent {}
