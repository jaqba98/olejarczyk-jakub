import { Component, Input } from '@angular/core';

import { SkillsTitleEnum, SkillsClassNameEnum } from '@olejarczyk-jakub/model';
import { SkillDumbComponent } from '../../dumb/skill-dumb/skill-dumb.component';
import { StyleOffDirective } from '../../base/style-off.directive';

@Component({
  selector: 'lib-skill-smart',
  imports: [SkillDumbComponent],
  templateUrl: './skill-smart.component.html',
  hostDirectives: [StyleOffDirective],
})
export class SkillSmartComponent {
  @Input({ required: true }) skillTitle!: SkillsTitleEnum;

  @Input({ required: true }) skillClassName!: SkillsClassNameEnum;

  @Input() isColored = true;

  @Input() isPrimaryColor = false;
}
