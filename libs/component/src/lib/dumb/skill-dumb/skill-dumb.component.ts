import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { SkillsClassNameEnum, SkillsTitleEnum } from '@olejarczyk-jakub/model';
import { TextSmartComponent } from '../../smart/text-smart/text-smart.component';
import { StyleOffDirective } from '../../base/style-off.directive';

@Component({
  selector: 'lib-skill-dumb',
  imports: [CommonModule, TextSmartComponent],
  templateUrl: './skill-dumb.component.html',
  styleUrl: './skill-dumb.component.scss',
  hostDirectives: [StyleOffDirective],
})
export class SkillDumbComponent {
  @Input({ required: true }) skillTitle!: SkillsTitleEnum;

  @Input({ required: true }) skillClassName!: SkillsClassNameEnum;

  @Input() isColored = true;

  @Input() isPrimaryColor = false;

  getClassList() {
    return {
      [this.skillClassName]: true,
      colored: this.isColored,
      'skill__primary-color': this.isPrimaryColor,
    };
  }
}
