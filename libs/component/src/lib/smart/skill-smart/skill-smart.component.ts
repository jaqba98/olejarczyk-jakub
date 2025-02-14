import { Component, Input } from '@angular/core';

import { SkillsEnum } from '@olejarczyk-jakub/model';
import { SkillDumbComponent } from '../../dumb/skill-dumb/skill-dumb.component';

@Component({
  selector: 'lib-skill-smart',
  imports: [SkillDumbComponent],
  templateUrl: './skill-smart.component.html',
})
export class SkillSmartComponent {
  @Input({ required: true }) skill!: keyof typeof SkillsEnum;

  @Input() isColored = true;

  @Input() isPrimaryColor = false;
}
