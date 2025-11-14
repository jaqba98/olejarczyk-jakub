import { SectionAppearanceModel } from '../model/section-appearance.model';

export class SectionAppearanceBuilder {
  static buildNav(): SectionAppearanceModel {
    return {
      section: {
        color: 'primary',
        padding: 'md',
        container: {
          maxWidth: 'max',
        },
      },
    };
  }

  static buildHome(): SectionAppearanceModel {
    return {
      section: {
        color: 'secondary',
        padding: 'xl',
        container: {
          maxWidth: 'container',
        },
      },
    };
  }

  static buildAboutMe(): SectionAppearanceModel {
    return {
      section: {
        color: 'primary',
        padding: 'xl',
        container: {
          maxWidth: 'container',
        },
      },
    };
  }

  static buildTechnology(): SectionAppearanceModel {
    return {
      section: {
        color: 'secondary',
        padding: 'xl',
        container: {
          maxWidth: 'container',
        },
      },
    };
  }

  static buildSkill(): SectionAppearanceModel {
    return {
      section: {
        color: 'primary',
        padding: 'xl',
        container: {
          maxWidth: 'container',
        },
      },
    };
  }

  static buildExperience(): SectionAppearanceModel {
    return {
      section: {
        color: 'secondary',
        padding: 'xl',
        container: {
          maxWidth: 'container',
        },
      },
    };
  }

  static buildResume(): SectionAppearanceModel {
    return {
      section: {
        color: 'primary',
        padding: 'xl',
        container: {
          maxWidth: 'container',
        },
      },
    };
  }

  static buildEducation(): SectionAppearanceModel {
    return {
      section: {
        color: 'secondary',
        padding: 'xl',
        container: {
          maxWidth: 'container',
        },
      },
    };
  }

  static buildProject(): SectionAppearanceModel {
    return {
      section: {
        color: 'primary',
        padding: 'xl',
        container: {
          maxWidth: 'container',
        },
      },
    };
  }

  static buildContact(): SectionAppearanceModel {
    return {
      section: {
        color: 'secondary',
        padding: 'xl',
        container: {
          maxWidth: 'container',
        },
      },
    };
  }

  static buildFooter(): SectionAppearanceModel {
    return {
      section: {
        color: 'primary',
        padding: 'md',
        container: {
          maxWidth: 'max',
        },
      },
    };
  }
}
