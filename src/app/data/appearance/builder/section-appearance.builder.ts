import { Injectable } from '@angular/core';

import { SectionAppearanceModel } from '../../../model/appearance/section-appearance.model';

@Injectable({ providedIn: 'root' })
export class SectionAppearanceBuilder {
  build(): SectionAppearanceModel {
    return {
      nav: {
        section: ['palette-brand', 'padding-section-ui'],
        container: [],
      },
      home: {
        section: ['palette-brand', 'padding-section-content'],
        container: [],
      },
      aboutMe: {
        section: ['palette-content-light', 'padding-section-content'],
        container: [],
      },
      technology: {
        section: ['palette-content-light-contrast', 'padding-section-content'],
        container: [],
      },
      skill: {
        section: ['palette-content-light', 'padding-section-content'],
        container: [],
      },
      experience: {
        section: ['palette-content-light-contrast', 'padding-section-content'],
        container: [],
      },
      resume: {
        section: ['palette-content-light', 'padding-section-content'],
        container: [],
      },
      education: {
        section: ['palette-content-light-contrast', 'padding-section-content'],
        container: [],
      },
      project: {
        section: ['palette-content-light', 'padding-section-content'],
        container: [],
      },
      contact: {
        section: ['palette-content-light-contrast', 'padding-section-content'],
        container: [],
      },
      footer: {
        section: ['palette-content-dark', 'padding-section-ui'],
        container: [],
      },
    };
  }
}
