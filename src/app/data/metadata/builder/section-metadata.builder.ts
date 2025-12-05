import { Injectable } from '@angular/core';

import { SectionMetadataModel } from '../../../model/metadata/section-metadata.model';

@Injectable({ providedIn: 'root' })
export class SectionMetadataBuilder {
  build(): SectionMetadataModel {
    return {
      nav: {
        showTitle: false,
      },
      home: {
        showTitle: true,
      },
      aboutMe: {
        showTitle: true,
      },
      technology: {
        showTitle: true,
      },
      skill: {
        showTitle: true,
      },
      experience: {
        showTitle: true,
      },
      resume: {
        showTitle: true,
      },
      education: {
        showTitle: true,
      },
      project: {
        showTitle: true,
      },
      contact: {
        showTitle: true,
      },
      footer: {
        showTitle: false,
      },
    };
  }
}
