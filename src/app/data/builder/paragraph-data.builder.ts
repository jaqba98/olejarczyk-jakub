import { ParagraphDataModel } from '../model/paragraph-data.model';

export class ParagraphDataBuilder {
  static buildNav(): ParagraphDataModel {
    return {
      text: 'Content nav',
    };
  }

  static buildHome(): ParagraphDataModel {
    return {
      text: 'Content home',
    };
  }

  static buildAboutMe(): ParagraphDataModel {
    return {
      text: 'Content about-me',
    };
  }

  static buildTechnology(): ParagraphDataModel {
    return {
      text: 'Content technology',
    };
  }

  static buildSkill(): ParagraphDataModel {
    return {
      text: 'Content skill',
    };
  }

  static buildExperience(): ParagraphDataModel {
    return {
      text: 'Content experience',
    };
  }

  static buildResume(): ParagraphDataModel {
    return {
      text: 'Content resume',
    };
  }

  static buildEducation(): ParagraphDataModel {
    return {
      text: 'Content education',
    };
  }

  static buildProject(): ParagraphDataModel {
    return {
      text: 'Content project',
    };
  }

  static buildContact(): ParagraphDataModel {
    return {
      text: 'Content contact',
    };
  }

  static buildFooter(): ParagraphDataModel {
    return {
      text: 'Content footer',
    };
  }
}
