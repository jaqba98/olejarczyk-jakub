import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { SkillsClassNameEnum } from '@olejarczyk-jakub/model';

@Component({
  selector: 'lib-skill-dumb',
  imports: [CommonModule],
  templateUrl: './skill-dumb.component.html',
  styleUrl: './skill-dumb.component.scss',
})
export class SkillItemDumbComponent {
  @Input({ required: true }) skillClass!: SkillsClassNameEnum;
}
