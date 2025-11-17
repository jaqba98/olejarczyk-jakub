import { Injectable } from '@angular/core';

import { SectionDomainModel } from '../../../model/domain/domain/section-domain.model';
import { AppearanceStateModel } from '../../../model/state/appearance-state.model';
import { DataStateModel } from '../../../model/state/data-state.model';
import { MetadataStateModel } from '../../../model/state/metadata-state.model';

@Injectable({ providedIn: 'root' })
export class SectionDomainBuilder {
  build(
    dataState: DataStateModel,
    metadataState: MetadataStateModel,
    appearanceState: AppearanceStateModel,
  ): SectionDomainModel {
    return {
      nav: {
        data: dataState.section.nav,
        metadata: metadataState.section.nav,
        appearance: appearanceState.section.nav,
      },
      home: {
        data: dataState.section.home,
        metadata: metadataState.section.home,
        appearance: appearanceState.section.home,
      },
      aboutMe: {
        data: dataState.section.aboutMe,
        metadata: metadataState.section.aboutMe,
        appearance: appearanceState.section.aboutMe,
      },
      technology: {
        data: dataState.section.technology,
        metadata: metadataState.section.technology,
        appearance: appearanceState.section.technology,
      },
      skill: {
        data: dataState.section.skill,
        metadata: metadataState.section.skill,
        appearance: appearanceState.section.skill,
      },
      experience: {
        data: dataState.section.experience,
        metadata: metadataState.section.experience,
        appearance: appearanceState.section.experience,
      },
      resume: {
        data: dataState.section.resume,
        metadata: metadataState.section.resume,
        appearance: appearanceState.section.resume,
      },
      education: {
        data: dataState.section.education,
        metadata: metadataState.section.education,
        appearance: appearanceState.section.education,
      },
      project: {
        data: dataState.section.project,
        metadata: metadataState.section.project,
        appearance: appearanceState.section.project,
      },
      contact: {
        data: dataState.section.contact,
        metadata: metadataState.section.contact,
        appearance: appearanceState.section.contact,
      },
      footer: {
        data: dataState.section.footer,
        metadata: metadataState.section.footer,
        appearance: appearanceState.section.footer,
      },
    };
  }
}
