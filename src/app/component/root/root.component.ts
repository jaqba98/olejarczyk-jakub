import { Component } from '@angular/core';

import { NavSectionComponent } from '../section/nav/nav-section.component';
import { HomeSectionComponent } from '../section/home/home-section.component';
import { AboutMeSectionComponent } from '../section/about-me/about-me-section.component';
import { TechnologySectionComponent } from '../section/technology/technology-section.component';
import { SkillSectionComponent } from '../section/skill/skill-section.component';
import { ExperienceSectionComponent } from '../section/experience/experience-section.component';
import { ResumeSectionComponent } from '../section/resume/resume-section.component';
import { EducationSectionComponent } from '../section/education/education-section.component';
import { ProjectSectionComponent } from '../section/project/project-section.component';
import { ContactSectionComponent } from '../section/contact/contact-section.component';
import { FooterSectionComponent } from '../section/footer/footer-section.component';

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  imports: [
    NavSectionComponent,
    HomeSectionComponent,
    AboutMeSectionComponent,
    TechnologySectionComponent,
    SkillSectionComponent,
    ExperienceSectionComponent,
    ResumeSectionComponent,
    EducationSectionComponent,
    ProjectSectionComponent,
    ContactSectionComponent,
    FooterSectionComponent,
  ],
})
export class RootComponent {}
