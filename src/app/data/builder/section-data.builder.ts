import { Injectable } from '@angular/core';

import { SectionDataModel } from '../model/section-data.model';

@Injectable({ providedIn: 'root' })
export class SectionDataBuilder {
  buildNav(): SectionDataModel {
    return {
      id: 'nav',
      label: 'Nav',
      href: `#nav`,
    };
  }

  buildHome(): SectionDataModel {
    return {
      id: 'home',
      label: 'Home',
      href: `#home`,
    };
  }

  buildAboutMe(): SectionDataModel {
    return {
      id: 'about-me',
      label: 'About me',
      href: '#about-me',
    };
  }

  buildTechnology(): SectionDataModel {
    return {
      id: 'technology',
      label: 'Technology',
      href: '#technology',
    };
  }

  buildSkill(): SectionDataModel {
    return {
      id: 'skill',
      label: 'Skill',
      href: '#skill',
    };
  }

  buildExperience(): SectionDataModel {
    return {
      id: 'experience',
      label: 'Experience',
      href: '#experience',
    };
  }

  buildResume(): SectionDataModel {
    return {
      id: 'resume',
      label: 'Resume',
      href: '#resume',
    };
  }

  buildEducation(): SectionDataModel {
    return {
      id: 'education',
      label: 'Education',
      href: '#education',
    };
  }

  buildProject(): SectionDataModel {
    return {
      id: 'project',
      label: 'Project',
      href: '#project',
    };
  }

  buildContact(): SectionDataModel {
    return {
      id: 'contact',
      label: 'Contact',
      href: '#contact',
    };
  }

  buildFooter(): SectionDataModel {
    return {
      id: 'footer',
      label: 'Footer',
      href: '#footer',
    };
  }
}
