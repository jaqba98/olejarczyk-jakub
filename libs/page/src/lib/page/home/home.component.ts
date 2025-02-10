import { Component } from '@angular/core';

import {
  HomeViewComponent,
  NavViewComponent,
  SkillsViewComponent,
  AboutMeViewComponent,
  EducationViewComponent,
  ResumeViewComponent,
  ContactViewComponent,
  CopyrightViewComponent,
  ProjectsViewComponent,
  ExperienceViewComponent,
} from '@olejarczyk-jakub/component';

@Component({
  selector: 'lib-home',
  imports: [
    HomeViewComponent,
    NavViewComponent,
    SkillsViewComponent,
    AboutMeViewComponent,
    EducationViewComponent,
    ResumeViewComponent,
    ContactViewComponent,
    CopyrightViewComponent,
    HomeViewComponent,
    ProjectsViewComponent,
    ExperienceViewComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
