import { SectionMetadataModel } from '../model/section-metadata.model';

export class SectionMetadataBuilder {
  static buildNav(): SectionMetadataModel {
    return {
      title: {
        visible: false,
      },
      container: {
        maxWidth: '100%',
      },
    };
  }

  static buildHome(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
      container: {
        maxWidth: '960px',
      },
    };
  }

  static buildAboutMe(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
      container: {
        maxWidth: '960px',
      },
    };
  }

  static buildTechnology(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
      container: {
        maxWidth: '960px',
      },
    };
  }

  static buildSkill(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
      container: {
        maxWidth: '960px',
      },
    };
  }

  static buildExperience(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
      container: {
        maxWidth: '960px',
      },
    };
  }

  static buildResume(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
      container: {
        maxWidth: '960px',
      },
    };
  }

  static buildEducation(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
      container: {
        maxWidth: '960px',
      },
    };
  }

  static buildProject(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
      container: {
        maxWidth: '960px',
      },
    };
  }

  static buildContact(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
      container: {
        maxWidth: '960px',
      },
    };
  }

  static buildFooter(): SectionMetadataModel {
    return {
      title: {
        visible: false,
      },
      container: {
        maxWidth: '100%',
      },
    };
  }
}
