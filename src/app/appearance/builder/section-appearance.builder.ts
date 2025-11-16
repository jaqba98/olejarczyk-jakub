import { Injectable } from '@angular/core';

import { SectionAppearanceModel } from '../../model/appearance/section-appearance.model';

@Injectable({ providedIn: 'root' })
export class SectionAppearanceBuilder {
  build(): SectionAppearanceModel {
    return {
      nav: {
        section: [],
        container: [],
      },
      home: {
        section: [],
        container: [],
      },
      aboutMe: {
        section: [],
        container: [],
      },
      technology: {
        section: [],
        container: [],
      },
      skill: {
        section: [],
        container: [],
      },
      experience: {
        section: [],
        container: [],
      },
      resume: {
        section: [],
        container: [],
      },
      education: {
        section: [],
        container: [],
      },
      project: {
        section: [],
        container: [],
      },
      contact: {
        section: [],
        container: [],
      },
      footer: {
        section: [],
        container: [],
      },
    };
  }
}
