import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'lib-experience-item-dumb',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './experience-item-dumb.component.html',
  styleUrl: './experience-item-dumb.component.scss',
})
export class ExperienceItemDumbComponent extends BaseComponent {
  @Input({ required: true }) year!: string;

  @Input({ required: true }) company!: string;

  @Input({ required: true }) profession!: string;

  @Input({ required: true }) tasks!: string[];

  faBuilding = faBuilding;
}
