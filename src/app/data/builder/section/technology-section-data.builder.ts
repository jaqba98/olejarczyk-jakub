import { SectionDataModel } from '../../model/section-data.model';

export class TechnologySectionDataBuilder {
  build(): SectionDataModel {
    return {
      id: 'technology',
      label: 'Technology',
      href: '#technology',
    };
  }
}
