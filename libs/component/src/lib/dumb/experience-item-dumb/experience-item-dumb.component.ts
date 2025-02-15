import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

import { IconDumbComponent } from '../icon-dumb/icon-dumb.component';
import { TextDumbComponent } from '../text-dumb/text-dumb.component';
import { TextSmartComponent } from "../../smart/text-smart/text-smart.component";

@Component({
  selector: 'lib-experience-item-dumb',
  imports: [CommonModule, IconDumbComponent, TextDumbComponent, TextSmartComponent],
  templateUrl: './experience-item-dumb.component.html',
  styleUrl: './experience-item-dumb.component.scss',
})
export class ExperienceItemDumbComponent {
  @Input({ required: true }) year!: string;

  @Input({ required: true }) company!: string;

  @Input({ required: true }) profession!: string;

  @Input({ required: true }) tasks: string[] = [];

  faBuilding = faBuilding;
}
