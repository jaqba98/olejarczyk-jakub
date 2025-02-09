import { Component } from '@angular/core';

import {
  NavViewComponent,
  SkillsViewComponent,
} from '@olejarczyk-jakub/component';

@Component({
  selector: 'lib-home',
  imports: [NavViewComponent, SkillsViewComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
