import { SectionDataModel } from '../../model/section-data.model';

export class EducationSectionDataBuilder {
  build(): SectionDataModel {
    return {
      id: 'education',
      label: 'Education',
      href: '#education',
    };
  }
}
