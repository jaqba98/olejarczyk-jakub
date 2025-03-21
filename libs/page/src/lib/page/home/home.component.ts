import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  NavViewComponent,
  MenuMobileViewComponent,
  HomeViewComponent,
  AboutMeViewComponent,
  SkillsViewComponent,
  ProjectsViewComponent,
  ExperienceViewComponent,
  EducationViewComponent,
  ResumeViewComponent,
  ContactViewComponent,
  BaseComponent,
  CopyrightViewComponent,
  KnowledgeViewComponent,
} from '@olejarczyk-jakub/component';

@Component({
  selector: 'lib-home',
  imports: [
    CommonModule,
    NavViewComponent,
    MenuMobileViewComponent,
    HomeViewComponent,
    AboutMeViewComponent,
    SkillsViewComponent,
    KnowledgeViewComponent,
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
