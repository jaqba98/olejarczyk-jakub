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
  BaseComponent,
} from '@olejarczyk-jakub/component';
import { CopyrightViewComponent } from '@olejarczyk-jakub/view';

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
