import { Injectable } from '@angular/core';

import { SectionAppearanceModel } from '../../../model/appearance/section-appearance.model';

@Injectable({ providedIn: 'root' })
export class SectionAppearanceBuilder {
  build(): SectionAppearanceModel {
    return {
      nav: {
        main: ['color__brand'],
        container: [],
      },
      home: {
        main: ['color__brand'],
        container: [],
      },
      aboutMe: {
        main: ['color__content--light'],
        container: [],
      },
      technology: {
        main: ['color__content--soft'],
        container: [],
      },
      skill: {
        main: ['color__content--light'],
        container: [],
      },
      experience: {
        main: ['color__content--soft'],
        container: [],
      },
      resume: {
        main: ['color__content--light'],
        container: [],
      },
      education: {
        main: ['color__content--soft'],
        container: [],
      },
      project: {
        main: ['color__content--light'],
        container: [],
      },
      contact: {
        main: ['color__content--soft'],
        container: [],
      },
      footer: {
        main: ['color__content--dark'],
        container: [],
      },
    };
  }
}
