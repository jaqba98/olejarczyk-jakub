import { Injectable } from '@angular/core';

import { SectionAppearanceModel } from '../../../model/appearance/section-appearance.model';

@Injectable({ providedIn: 'root' })
export class SectionAppearanceBuilder {
  build(): SectionAppearanceModel {
    return {
      nav: {
        section: ['palette-brand'],
        container: [],
      },
      home: {
        section: ['palette-brand'],
        container: [],
      },
      aboutMe: {
        section: ['palette-content'],
        container: [],
      },
      technology: {
        section: ['palette-content-separation'],
        container: [],
      },
      skill: {
        section: ['palette-content'],
        container: [],
      },
      experience: {
        section: ['palette-content-separation'],
        container: [],
      },
      resume: {
        section: ['palette-content'],
        container: [],
      },
      education: {
        section: ['palette-content-separation'],
        container: [],
      },
      project: {
        section: ['palette-content'],
        container: [],
      },
      contact: {
        section: ['palette-content-separation'],
        container: [],
      },
      footer: {
        section: ['palette-footer'],
        container: [],
      },
    };
  }
}
