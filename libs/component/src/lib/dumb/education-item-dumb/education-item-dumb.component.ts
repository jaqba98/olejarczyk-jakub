import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

import { IconDumbComponent } from '../icon-dumb/icon-dumb.component';
import { TextDumbComponent } from '../text-dumb/text-dumb.component';

@Component({
  selector: 'lib-education-item-dumb',
  imports: [CommonModule, IconDumbComponent, TextDumbComponent],
  templateUrl: './education-item-dumb.component.html',
  styleUrl: './education-item-dumb.component.scss',
})
export class EducationItemDumbComponent {
  @Input({ required: true }) year!: string;

  @Input({ required: true }) header!: string;

  @Input({ required: true }) course!: string;

  @Input({ required: true }) diploma!: string;

  faSchool = faSchool;
}
