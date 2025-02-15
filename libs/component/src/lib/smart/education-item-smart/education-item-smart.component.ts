import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { EducationItemDumbComponent } from '../../dumb/education-item-dumb/education-item-dumb.component';

@Component({
  selector: 'lib-education-item-smart',
  imports: [CommonModule, EducationItemDumbComponent],
  templateUrl: './education-item-smart.component.html',
})
export class EducationItemSmartComponent {
  @Input({ required: true }) year!: string;

  @Input({ required: true }) header!: string;

  @Input({ required: true }) course!: string;

  @Input({ required: true }) diploma!: string;
}
