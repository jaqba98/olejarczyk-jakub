import { SectionMetadataModel } from '../model/section-metadata.model';

export class SectionMetadataBuilder {
  static buildNav(): SectionMetadataModel {
    return {
      showTitle: false,
    };
  }

  static buildHome(): SectionMetadataModel {
    return {
      showTitle: true,
    };
  }

  static buildAboutMe(): SectionMetadataModel {
    return {
      showTitle: true,
    };
  }

  static buildTechnology(): SectionMetadataModel {
    return {
      showTitle: true,
    };
  }

  static buildSkill(): SectionMetadataModel {
    return {
      showTitle: true,
    };
  }

  static buildExperience(): SectionMetadataModel {
    return {
      showTitle: true,
    };
  }

  static buildResume(): SectionMetadataModel {
    return {
      showTitle: true,
    };
  }

  static buildEducation(): SectionMetadataModel {
    return {
      showTitle: true,
    };
  }

  static buildProject(): SectionMetadataModel {
    return {
      showTitle: true,
    };
  }

  static buildContact(): SectionMetadataModel {
    return {
      showTitle: true,
    };
  }

  static buildFooter(): SectionMetadataModel {
    return {
      showTitle: false,
    };
  }
}
