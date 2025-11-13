import { Injectable } from '@angular/core';

import { SectionDomainModel } from '../model/builder/section-domain.model';
import { SectionDataBuilder } from '../../data/builder/section-data.builder';
import { SectionMetadataBuilder } from '../../metadata/builder/section-metadata.builder';

@Injectable({ providedIn: 'root' })
export class SectionDomainBuilder {
  constructor(
    private readonly data: SectionDataBuilder,
    private readonly metadata: SectionMetadataBuilder,
  ) {}

  buildNav(): SectionDomainModel {
    return {
      kind: 'section',
      data: this.data.buildNav(),
      metadata: this.metadata.buildNav(),
    };
  }

  buildHome(): SectionDomainModel {
    return {
      kind: 'section',
      data: this.data.buildHome(),
      metadata: this.metadata.buildHome(),
    };
  }

  buildAboutMe(): SectionDomainModel {
    return {
      kind: 'section',
      data: this.data.buildAboutMe(),
      metadata: this.metadata.buildAboutMe(),
    };
  }

  buildTechnology(): SectionDomainModel {
    return {
      kind: 'section',
      data: this.data.buildTechnology(),
      metadata: this.metadata.buildTechnology(),
    };
  }

  buildSkill(): SectionDomainModel {
    return {
      kind: 'section',
      data: this.data.buildSkill(),
      metadata: this.metadata.buildSkill(),
    };
  }

  buildExperience(): SectionDomainModel {
    return {
      kind: 'section',
      data: this.data.buildExperience(),
      metadata: this.metadata.buildExperience(),
    };
  }

  buildResume(): SectionDomainModel {
    return {
      kind: 'section',
      data: this.data.buildResume(),
      metadata: this.metadata.buildResume(),
    };
  }

  buildEducation(): SectionDomainModel {
    return {
      kind: 'section',
      data: this.data.buildEducation(),
      metadata: this.metadata.buildEducation(),
    };
  }

  buildProject(): SectionDomainModel {
    return {
      kind: 'section',
      data: this.data.buildProject(),
      metadata: this.metadata.buildProject(),
    };
  }

  buildContact(): SectionDomainModel {
    return {
      kind: 'section',
      data: this.data.buildContact(),
      metadata: this.metadata.buildContact(),
    };
  }

  buildFooter(): SectionDomainModel {
    return {
      kind: 'section',
      data: this.data.buildFooter(),
      metadata: this.metadata.buildFooter(),
    };
  }
}
