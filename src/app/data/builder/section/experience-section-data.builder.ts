import { SectionDataModel } from '../../model/section-data.model';

export class ExperienceSectionDataBuilder {
  build(): SectionDataModel {
    return {
      id: 'experience',
      label: 'Experience',
      href: '#experience',
    };
  }
}
