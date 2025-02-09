import { Component } from '@angular/core';

import { BaseComponent } from '../../base/base.component';
import { HtmlComponent } from '../../language/html/html.component';

@Component({
  selector: 'lib-skills-view',
  imports: [HtmlComponent],
  templateUrl: './skills-view.component.html',
  styleUrl: './skills-view.component.scss',
})
export class SkillsViewComponent extends BaseComponent {}
