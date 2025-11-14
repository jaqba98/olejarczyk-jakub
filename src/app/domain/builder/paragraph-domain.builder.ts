import { ParagraphAppearanceBuilder } from '../../appearance/builder/paragraph-appearance.builder';
import { ParagraphDataBuilder } from '../../data/builder/paragraph-data.builder';
import { ParagraphMetadataBuilder } from '../../metadata/builder/paragraph-metadata.builder';
import { ParagraphDomainModel } from '../model/builder/paragraph-domain.model';

export class ParagraphDomainBuilder {
  static buildNav(): ParagraphDomainModel {
    return {
      kind: 'paragraph',
      data: ParagraphDataBuilder.buildNav(),
      metadata: ParagraphMetadataBuilder.buildNav(),
      appearance: ParagraphAppearanceBuilder.buildNav(),
    };
  }

  static buildHome(): ParagraphDomainModel {
    return {
      kind: 'paragraph',
      data: ParagraphDataBuilder.buildHome(),
      metadata: ParagraphMetadataBuilder.buildHome(),
      appearance: ParagraphAppearanceBuilder.buildHome(),
    };
  }

  static buildAboutMe(): ParagraphDomainModel {
    return {
      kind: 'paragraph',
      data: ParagraphDataBuilder.buildAboutMe(),
      metadata: ParagraphMetadataBuilder.buildAboutMe(),
      appearance: ParagraphAppearanceBuilder.buildAboutMe(),
    };
  }

  static buildTechnology(): ParagraphDomainModel {
    return {
      kind: 'paragraph',
      data: ParagraphDataBuilder.buildTechnology(),
      metadata: ParagraphMetadataBuilder.buildTechnology(),
      appearance: ParagraphAppearanceBuilder.buildTechnology(),
    };
  }

  static buildSkill(): ParagraphDomainModel {
    return {
      kind: 'paragraph',
      data: ParagraphDataBuilder.buildSkill(),
      metadata: ParagraphMetadataBuilder.buildSkill(),
      appearance: ParagraphAppearanceBuilder.buildSkill(),
    };
  }

  static buildExperience(): ParagraphDomainModel {
    return {
      kind: 'paragraph',
      data: ParagraphDataBuilder.buildExperience(),
      metadata: ParagraphMetadataBuilder.buildExperience(),
      appearance: ParagraphAppearanceBuilder.buildExperience(),
    };
  }

  static buildResume(): ParagraphDomainModel {
    return {
      kind: 'paragraph',
      data: ParagraphDataBuilder.buildResume(),
      metadata: ParagraphMetadataBuilder.buildResume(),
      appearance: ParagraphAppearanceBuilder.buildResume(),
    };
  }

  static buildEducation(): ParagraphDomainModel {
    return {
      kind: 'paragraph',
      data: ParagraphDataBuilder.buildEducation(),
      metadata: ParagraphMetadataBuilder.buildEducation(),
      appearance: ParagraphAppearanceBuilder.buildEducation(),
    };
  }

  static buildProject(): ParagraphDomainModel {
    return {
      kind: 'paragraph',
      data: ParagraphDataBuilder.buildProject(),
      metadata: ParagraphMetadataBuilder.buildProject(),
      appearance: ParagraphAppearanceBuilder.buildProject(),
    };
  }

  static buildContact(): ParagraphDomainModel {
    return {
      kind: 'paragraph',
      data: ParagraphDataBuilder.buildContact(),
      metadata: ParagraphMetadataBuilder.buildContact(),
      appearance: ParagraphAppearanceBuilder.buildContact(),
    };
  }

  static buildFooter(): ParagraphDomainModel {
    return {
      kind: 'paragraph',
      data: ParagraphDataBuilder.buildFooter(),
      metadata: ParagraphMetadataBuilder.buildFooter(),
      appearance: ParagraphAppearanceBuilder.buildFooter(),
    };
  }
}
