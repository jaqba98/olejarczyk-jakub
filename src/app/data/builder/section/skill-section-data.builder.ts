import { SectionDataModel } from '../../model/section-data.model';

export class SkillSectionDataBuilder {
  build(): SectionDataModel {
    return {
      id: 'skill',
      label: 'Skill',
      href: '#skill',
    };
  }
}
