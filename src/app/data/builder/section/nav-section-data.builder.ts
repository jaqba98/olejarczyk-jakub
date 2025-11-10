import { SectionDataModel } from '../../model/section-data.model';

export class NavSectionDataBuilder {
  build(): SectionDataModel {
    return {
      id: 'nav',
      label: 'Nav',
      href: '#nav',
    };
  }
}
