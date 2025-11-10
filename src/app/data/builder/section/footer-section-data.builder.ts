import { SectionDataModel } from '../../model/section-data.model';

export class FooterSectionDataBuilder {
  build(): SectionDataModel {
    return {
      id: 'footer',
      label: 'Footer',
      href: '#footer',
    };
  }
}
