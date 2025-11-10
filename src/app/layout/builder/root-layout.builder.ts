import { RootLayoutModel } from '../model/root-layout.model';
import { AboutMeSectionLayoutBuilder } from './section/about-me-section-layout.builder';
import { ContactSectionLayoutBuilder } from './section/contact-section-layout.builder';
import { EducationSectionLayoutBuilder } from './section/education-section-layout.builder';
import { ExperienceSectionLayoutBuilder } from './section/experience-section-layout.builder';
import { FooterSectionLayoutBuilder } from './section/footer-section-layout.builder';
import { HomeSectionLayoutBuilder } from './section/home-section-layout.builder';
import { NavSectionLayoutBuilder } from './section/nav-section-layout.builder';
import { ProjectSectionLayoutBuilder } from './section/project-section-layout.builder';
import { ResumeSectionLayoutBuilder } from './section/resume-section-layout.builder';
import { SkillSectionLayoutBuilder } from './section/skill-section-layout.builder';
import { TechnologySectionLayoutBuilder } from './section/technology-section-layout.builder';

export class RootLayoutBuilder {
  constructor(
    private readonly nav: NavSectionLayoutBuilder,
    private readonly home: HomeSectionLayoutBuilder,
    private readonly aboutMe: AboutMeSectionLayoutBuilder,
    private readonly technology: TechnologySectionLayoutBuilder,
    private readonly skill: SkillSectionLayoutBuilder,
    private readonly experience: ExperienceSectionLayoutBuilder,
    private readonly resume: ResumeSectionLayoutBuilder,
    private readonly education: EducationSectionLayoutBuilder,
    private readonly project: ProjectSectionLayoutBuilder,
    private readonly contact: ContactSectionLayoutBuilder,
    private readonly footer: FooterSectionLayoutBuilder,
  ) {}

  build(): RootLayoutModel {
    return {
      nav: this.nav.build(),
      home: this.home.build(),
      aboutMe: this.aboutMe.build(),
      technology: this.technology.build(),
      skill: this.skill.build(),
      experience: this.experience.build(),
      resume: this.resume.build(),
      education: this.education.build(),
      project: this.project.build(),
      contact: this.contact.build(),
      footer: this.footer.build(),
    };
  }
}
