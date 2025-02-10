import { Component } from '@angular/core';

import {
  NavViewComponent,
  SkillsViewComponent,
  AboutMeViewComponent,
  EducationViewComponent,
  ResumeViewComponent,
  ContactViewComponent,
  CopyrightViewComponent,
} from '@olejarczyk-jakub/component';

@Component({
  selector: 'lib-home',
  imports: [
    NavViewComponent,
    SkillsViewComponent,
    AboutMeViewComponent,
    EducationViewComponent,
    ResumeViewComponent,
    ContactViewComponent,
    CopyrightViewComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
