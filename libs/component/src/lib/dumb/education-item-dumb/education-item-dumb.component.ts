import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'lib-education-item-dumb',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './education-item-dumb.component.html',
  styleUrl: './education-item-dumb.component.scss',
})
export class EducationItemDumbComponent extends BaseComponent {
  @Input({ required: true }) year!: string;

  @Input({ required: true }) header!: string;

  @Input({ required: true }) course!: string;

  @Input({ required: true }) diploma!: string;

  faSchool = faSchool;
}
