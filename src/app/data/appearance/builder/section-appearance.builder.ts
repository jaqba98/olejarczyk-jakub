import { Injectable } from '@angular/core';

import { SectionAppearanceModel } from '../../../model/appearance/section-appearance.model';

@Injectable({ providedIn: 'root' })
export class SectionAppearanceBuilder {
  build(): SectionAppearanceModel {
    return {
      nav: {
        main: [],
        container: [],
        title: [],
      },
      home: {
        main: [],
        container: [],
        title: [],
      },
      aboutMe: {
        main: [],
        container: [],
        title: [],
      },
      technology: {
        main: [],
        container: [],
        title: [],
      },
      skill: {
        main: [],
        container: [],
        title: [],
      },
      experience: {
        main: [],
        container: [],
        title: [],
      },
      resume: {
        main: [],
        container: [],
        title: [],
      },
      education: {
        main: [],
        container: [],
        title: [],
      },
      project: {
        main: [],
        container: [],
        title: [],
      },
      contact: {
        main: [],
        container: [],
        title: [],
      },
      footer: {
        main: [],
        container: [],
        title: [],
      },
    };
  }
}
