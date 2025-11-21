import { Injectable } from '@angular/core';

import { SectionAppearanceModel } from '../../../model/appearance/section-appearance.model';

@Injectable({ providedIn: 'root' })
export class SectionAppearanceBuilder {
  build(): SectionAppearanceModel {
    return {
      nav: {
        main: [],
        container: [],
      },
      home: {
        main: [],
        container: [],
      },
      aboutMe: {
        main: [],
        container: [],
      },
      technology: {
        main: [],
        container: [],
      },
      skill: {
        main: [],
        container: [],
      },
      experience: {
        main: [],
        container: [],
      },
      resume: {
        main: [],
        container: [],
      },
      education: {
        main: [],
        container: [],
      },
      project: {
        main: [],
        container: [],
      },
      contact: {
        main: [],
        container: [],
      },
      footer: {
        main: [],
        container: [],
      },
    };
  }
}
