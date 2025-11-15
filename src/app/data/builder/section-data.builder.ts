import { SectionBuilderData } from '../../builder/data/section-builder.date';
import { SectionDataModel } from '../model/section-data.model';

export class SectionData2Builder {
  static buildNav(): SectionDataModel {
    return {
      id: SectionBuilderData.buildSectionId('nav'),
      label: SectionBuilderData.buildSectionLabel('nav'),
      href: SectionBuilderData.buildSectionHref('nav'),
    };
  }

  static buildHome(): SectionDataModel {
    return {
      id: SectionBuilderData.buildSectionId('home'),
      label: SectionBuilderData.buildSectionLabel('home'),
      href: SectionBuilderData.buildSectionHref('home'),
    };
  }

  static buildAboutMe(): SectionDataModel {
    return {
      id: SectionBuilderData.buildSectionId('aboutMe'),
      label: SectionBuilderData.buildSectionLabel('aboutMe'),
      href: SectionBuilderData.buildSectionHref('aboutMe'),
    };
  }

  static buildTechnology(): SectionDataModel {
    return {
      id: SectionBuilderData.buildSectionId('technology'),
      label: SectionBuilderData.buildSectionLabel('technology'),
      href: SectionBuilderData.buildSectionHref('technology'),
    };
  }

  static buildSkill(): SectionDataModel {
    return {
      id: SectionBuilderData.buildSectionId('skill'),
      label: SectionBuilderData.buildSectionLabel('skill'),
      href: SectionBuilderData.buildSectionHref('skill'),
    };
  }

  static buildExperience(): SectionDataModel {
    return {
      id: SectionBuilderData.buildSectionId('experience'),
      label: SectionBuilderData.buildSectionLabel('experience'),
      href: SectionBuilderData.buildSectionHref('experience'),
    };
  }

  static buildResume(): SectionDataModel {
    return {
      id: SectionBuilderData.buildSectionId('resume'),
      label: SectionBuilderData.buildSectionLabel('resume'),
      href: SectionBuilderData.buildSectionHref('resume'),
    };
  }

  static buildEducation(): SectionDataModel {
    return {
      id: SectionBuilderData.buildSectionId('education'),
      label: SectionBuilderData.buildSectionLabel('education'),
      href: SectionBuilderData.buildSectionHref('education'),
    };
  }

  static buildProject(): SectionDataModel {
    return {
      id: SectionBuilderData.buildSectionId('project'),
      label: SectionBuilderData.buildSectionLabel('project'),
      href: SectionBuilderData.buildSectionHref('project'),
    };
  }

  static buildContact(): SectionDataModel {
    return {
      id: SectionBuilderData.buildSectionId('contact'),
      label: SectionBuilderData.buildSectionLabel('contact'),
      href: SectionBuilderData.buildSectionHref('contact'),
    };
  }

  static buildFooter(): SectionDataModel {
    return {
      id: SectionBuilderData.buildSectionId('footer'),
      label: SectionBuilderData.buildSectionLabel('footer'),
      href: SectionBuilderData.buildSectionHref('footer'),
    };
  }
}
