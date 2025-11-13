import { SectionMetadataModel } from '../model/section-metadata.model';

export class SectionMetadataBuilder {
  static buildNav(): SectionMetadataModel {
    return {
      title: {
        visible: false,
      },
    };
  }

  static buildHome(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
    };
  }

  static buildAboutMe(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
    };
  }

  static buildTechnology(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
    };
  }

  static buildSkill(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
    };
  }

  static buildExperience(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
    };
  }

  static buildResume(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
    };
  }

  static buildEducation(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
    };
  }

  static buildProject(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
    };
  }

  static buildContact(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
    };
  }

  static buildFooter(): SectionMetadataModel {
    return {
      title: {
        visible: false,
      },
    };
  }
}
