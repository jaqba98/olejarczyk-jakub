import { Injectable } from '@angular/core';

import { RawStateModel } from '../../../model/state/raw-state.model';
import { SectionMapperModel } from '../../../model/mapper/section-mapper.model';

@Injectable({ providedIn: 'root' })
export class SectionMapperBuilder {
  build(state: RawStateModel): SectionMapperModel {
    const { section } = state;
    return {
      section: {
        nav: {
          id: section.nav.id,
          label: section.nav.label,
        },
        home: {
          id: section.home.id,
          label: section.home.label,
        },
        aboutMe: {
          id: section.aboutMe.id,
          label: section.aboutMe.label,
        },
        technology: {
          id: section.technology.id,
          label: section.technology.label,
        },
        skill: {
          id: section.skill.id,
          label: section.skill.label,
        },
        experience: {
          id: section.experience.id,
          label: section.experience.label,
        },
        resume: {
          id: section.resume.id,
          label: section.resume.label,
        },
        education: {
          id: section.education.id,
          label: section.education.label,
        },
        project: {
          id: section.project.id,
          label: section.project.label,
        },
        contact: {
          id: section.contact.id,
          label: section.contact.label,
        },
        footer: {
          id: section.footer.id,
          label: section.footer.label,
        },
      },
    };
  }
}
