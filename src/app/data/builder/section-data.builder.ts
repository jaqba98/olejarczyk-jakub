import { SectionDataModel } from '../model/section-data.model';

export class SectionDataBuilder {
  static buildNav(): SectionDataModel {
    return {
      id: 'nav',
      label: 'Nav',
      href: `#nav`,
    };
  }

  static buildHome(): SectionDataModel {
    return {
      id: 'home',
      label: 'Home',
      href: `#home`,
    };
  }

  static buildAboutMe(): SectionDataModel {
    return {
      id: 'about-me',
      label: 'About me',
      href: '#about-me',
    };
  }

  static buildTechnology(): SectionDataModel {
    return {
      id: 'technology',
      label: 'Technology',
      href: '#technology',
    };
  }

  static buildSkill(): SectionDataModel {
    return {
      id: 'skill',
      label: 'Skill',
      href: '#skill',
    };
  }

  static buildExperience(): SectionDataModel {
    return {
      id: 'experience',
      label: 'Experience',
      href: '#experience',
    };
  }

  static buildResume(): SectionDataModel {
    return {
      id: 'resume',
      label: 'Resume',
      href: '#resume',
    };
  }

  static buildEducation(): SectionDataModel {
    return {
      id: 'education',
      label: 'Education',
      href: '#education',
    };
  }

  static buildProject(): SectionDataModel {
    return {
      id: 'project',
      label: 'Project',
      href: '#project',
    };
  }

  static buildContact(): SectionDataModel {
    return {
      id: 'contact',
      label: 'Contact',
      href: '#contact',
    };
  }

  static buildFooter(): SectionDataModel {
    return {
      id: 'footer',
      label: 'Footer',
      href: '#footer',
    };
  }
}
