import { Injectable } from '@angular/core';

import { SectionAppearanceModel } from '../../../model/appearance/section-appearance.model';

@Injectable({ providedIn: 'root' })
export class SectionAppearanceBuilder {
  build(): SectionAppearanceModel {
    return {
      nav: {
        section: ['background-primary'],
        container: [],
      },
      home: {
        section: ['background-primary'],
        container: [],
      },
      aboutMe: {
        section: ['background-primary'],
        container: [],
      },
      technology: {
        section: ['background-primary'],
        container: [],
      },
      skill: {
        section: ['background-primary'],
        container: [],
      },
      experience: {
        section: ['background-primary'],
        container: [],
      },
      resume: {
        section: ['background-primary'],
        container: [],
      },
      education: {
        section: ['background-primary'],
        container: [],
      },
      project: {
        section: ['background-primary'],
        container: [],
      },
      contact: {
        section: ['background-primary'],
        container: [],
      },
      footer: {
        section: ['background-primary'],
        container: [],
      },
    };
  }
}
