import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  NavViewComponent,
  HomeViewComponent,
  AboutMeViewComponent,
  SkillsViewComponent,
  ProjectsViewComponent,
  ExperienceViewComponent,
  EducationViewComponent,
  ResumeViewComponent,
  ContactViewComponent,
  CopyrightViewComponent,
  BaseComponent,
} from '@olejarczyk-jakub/component';

@Component({
  selector: 'lib-home',
  imports: [
    CommonModule,
    NavViewComponent,
    HomeViewComponent,
    AboutMeViewComponent,
    SkillsViewComponent,
    ProjectsViewComponent,
    ExperienceViewComponent,
    EducationViewComponent,
    ResumeViewComponent,
    ContactViewComponent,
    CopyrightViewComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent extends BaseComponent {}
