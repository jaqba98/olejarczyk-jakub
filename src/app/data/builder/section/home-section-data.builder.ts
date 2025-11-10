import { SectionDataModel } from '../../model/section-data.model';

export class HomeSectionDataBuilder {
  build(): SectionDataModel {
    return {
      id: 'home',
      label: 'Home',
      href: '#home',
    };
  }
}
