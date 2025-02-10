import { Component } from '@angular/core';

import {
  NavViewComponent,
  SkillsViewComponent,
  AboutMeViewComponent,
  EducationViewComponent,
  ResumeViewComponent,
} from '@olejarczyk-jakub/component';

@Component({
  selector: 'lib-home',
  imports: [
    NavViewComponent,
    SkillsViewComponent,
    AboutMeViewComponent,
    EducationViewComponent,
    ResumeViewComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
