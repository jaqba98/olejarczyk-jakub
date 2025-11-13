import { SectionDataBuilder } from '../../data/builder/section-data.builder';
import { SectionMetadataBuilder } from '../../metadata/builder/section-metadata.builder';
import { SectionDomainModel } from '../model/builder/section-domain.model';

export class SectionDomainBuilder {
  static buildNav(): SectionDomainModel {
    return {
      kind: 'section',
      data: SectionDataBuilder.buildNav(),
      metadata: SectionMetadataBuilder.buildNav(),
    };
  }

  static buildHome(): SectionDomainModel {
    return {
      kind: 'section',
      data: SectionDataBuilder.buildHome(),
      metadata: SectionMetadataBuilder.buildHome(),
    };
  }

  static buildAboutMe(): SectionDomainModel {
    return {
      kind: 'section',
      data: SectionDataBuilder.buildAboutMe(),
      metadata: SectionMetadataBuilder.buildAboutMe(),
    };
  }

  static buildTechnology(): SectionDomainModel {
    return {
      kind: 'section',
      data: SectionDataBuilder.buildTechnology(),
      metadata: SectionMetadataBuilder.buildTechnology(),
    };
  }

  static buildSkill(): SectionDomainModel {
    return {
      kind: 'section',
      data: SectionDataBuilder.buildSkill(),
      metadata: SectionMetadataBuilder.buildSkill(),
    };
  }

  static buildExperience(): SectionDomainModel {
    return {
      kind: 'section',
      data: SectionDataBuilder.buildExperience(),
      metadata: SectionMetadataBuilder.buildExperience(),
    };
  }

  static buildResume(): SectionDomainModel {
    return {
      kind: 'section',
      data: SectionDataBuilder.buildResume(),
      metadata: SectionMetadataBuilder.buildResume(),
    };
  }

  static buildEducation(): SectionDomainModel {
    return {
      kind: 'section',
      data: SectionDataBuilder.buildEducation(),
      metadata: SectionMetadataBuilder.buildEducation(),
    };
  }

  static buildProject(): SectionDomainModel {
    return {
      kind: 'section',
      data: SectionDataBuilder.buildProject(),
      metadata: SectionMetadataBuilder.buildProject(),
    };
  }

  static buildContact(): SectionDomainModel {
    return {
      kind: 'section',
      data: SectionDataBuilder.buildContact(),
      metadata: SectionMetadataBuilder.buildContact(),
    };
  }

  static buildFooter(): SectionDomainModel {
    return {
      kind: 'section',
      data: SectionDataBuilder.buildFooter(),
      metadata: SectionMetadataBuilder.buildFooter(),
    };
  }
}
