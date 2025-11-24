import { Injectable } from '@angular/core';

import { SectionAppearanceModel } from '../../../model/appearance/section-appearance.model';

@Injectable({ providedIn: 'root' })
export class SectionAppearanceBuilder {
  build(): SectionAppearanceModel {
    return {
      nav: {
        main: ['color__brand'],
        container: ['shape__nav'],
        title: [],
      },
      home: {
        main: ['color__brand'],
        container: ['shape__container'],
        title: [],
      },
      aboutMe: {
        main: ['color__content--light'],
        container: ['shape__container'],
        title: ['shape__container--title'],
      },
      technology: {
        main: ['color__content--soft'],
        container: ['shape__container'],
        title: [],
      },
      skill: {
        main: ['color__content--light'],
        container: ['shape__container'],
        title: [],
      },
      experience: {
        main: ['color__content--soft'],
        container: ['shape__container'],
        title: [],
      },
      resume: {
        main: ['color__content--light'],
        container: ['shape__container'],
        title: [],
      },
      education: {
        main: ['color__content--soft'],
        container: ['shape__container'],
        title: [],
      },
      project: {
        main: ['color__content--light'],
        container: ['shape__container'],
        title: [],
      },
      contact: {
        main: ['color__content--soft'],
        container: ['shape__container'],
        title: [],
      },
      footer: {
        main: ['color__content--dark'],
        container: ['shape__footer'],
        title: [],
      },
    };
  }
}
