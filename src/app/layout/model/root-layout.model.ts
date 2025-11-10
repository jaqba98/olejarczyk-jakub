import { AboutMeSectionLayoutModel } from './section/about-me-section-layout.model';
import { ContactSectionLayoutModel } from './section/contact-section-layout.model';
import { EducationSectionLayoutModel } from './section/education-section-layout.model';
import { ExperienceSectionLayoutModel } from './section/experience-section-layout.model';
import { FooterSectionLayoutModel } from './section/footer-section-layout.model';
import { HomeSectionLayoutModel } from './section/home-section-layout.model';
import { NavSectionLayoutModel } from './section/nav-section-layout.model';
import { ProjectSectionLayoutModel } from './section/project-section-layout.model';
import { ResumeSectionLayoutModel } from './section/resume-section-layout.model';
import { SkillSectionLayoutModel } from './section/skill-section-layout.model';
import { TechnologySectionLayoutModel } from './section/technology-section-layout.model';

export interface RootLayoutModel {
  nav: NavSectionLayoutModel;
  home: HomeSectionLayoutModel;
  aboutMe: AboutMeSectionLayoutModel;
  technology: TechnologySectionLayoutModel;
  skill: SkillSectionLayoutModel;
  experience: ExperienceSectionLayoutModel;
  resume: ResumeSectionLayoutModel;
  education: EducationSectionLayoutModel;
  project: ProjectSectionLayoutModel;
  contact: ContactSectionLayoutModel;
  footer: FooterSectionLayoutModel;
}
