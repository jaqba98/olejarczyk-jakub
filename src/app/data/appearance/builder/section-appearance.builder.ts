import { Injectable } from '@angular/core';

import { SectionAppearanceModel } from '../../../model/appearance/section-appearance.model';

@Injectable({ providedIn: 'root' })
export class SectionAppearanceBuilder {
  build(): SectionAppearanceModel {
    return {
      nav: {
        main: ['color__brand', 'shape__block'],
        container: [],
      },
      home: {
        main: ['color__brand', 'shape__content'],
        container: [],
      },
      aboutMe: {
        main: ['color__content--light', 'shape__content'],
        container: [],
      },
      technology: {
        main: ['color__content--soft', 'shape__content'],
        container: [],
      },
      skill: {
        main: ['color__content--light', 'shape__content'],
        container: [],
      },
      experience: {
        main: ['color__content--soft', 'shape__content'],
        container: [],
      },
      resume: {
        main: ['color__content--light', 'shape__content'],
        container: [],
      },
      education: {
        main: ['color__content--soft', 'shape__content'],
        container: [],
      },
      project: {
        main: ['color__content--light', 'shape__content'],
        container: [],
      },
      contact: {
        main: ['color__content--soft', 'shape__content'],
        container: [],
      },
      footer: {
        main: ['color__content--dark', 'shape__block'],
        container: [],
      },
    };
  }
}
