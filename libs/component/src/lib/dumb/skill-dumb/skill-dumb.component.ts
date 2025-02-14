import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import {
  SkillsClassNameEnum,
  SkillsEnum,
  SkillsTitleEnum,
} from '@olejarczyk-jakub/model';
import { TextSmartComponent } from '../../smart/text-smart/text-smart.component';

@Component({
  selector: 'lib-skill-dumb',
  imports: [CommonModule, TextSmartComponent],
  templateUrl: './skill-dumb.component.html',
  styleUrl: './skill-dumb.component.scss',
})
export class SkillDumbComponent {
  @Input({ required: true }) skill!: keyof typeof SkillsEnum;

  @Input() isColored = true;

  @Input() isPrimaryColor = false;

  getTitle() {
    return SkillsTitleEnum[this.skill];
  }

  getClassList() {
    const skillClass = SkillsClassNameEnum[this.skill];
    return {
      [skillClass]: true,
      colored: this.isColored,
      'skill__primary-color': this.isPrimaryColor,
    };
  }
}
