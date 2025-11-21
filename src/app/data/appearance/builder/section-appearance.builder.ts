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
        container: ['width-content'],
      },
      aboutMe: {
        section: ['palette-content-light', 'padding-section-content'],
        container: ['width-content'],
      },
      technology: {
        section: ['palette-content-light-contrast', 'padding-section-content'],
        container: ['width-content'],
      },
      skill: {
        section: ['palette-content-light', 'padding-section-content'],
        container: ['width-content'],
      },
      experience: {
        section: ['palette-content-light-contrast', 'padding-section-content'],
        container: ['width-content'],
      },
      resume: {
        section: ['palette-content-light', 'padding-section-content'],
        container: ['width-content'],
      },
      education: {
        section: ['palette-content-light-contrast', 'padding-section-content'],
        container: ['width-content'],
      },
      project: {
        section: ['palette-content-light', 'padding-section-content'],
        container: ['width-content'],
      },
      contact: {
        section: ['palette-content-light-contrast', 'padding-section-content'],
        container: ['width-content'],
      },
      footer: {
        section: ['palette-content-dark', 'padding-section-ui'],
        container: [],
      },
    };
  }
}
