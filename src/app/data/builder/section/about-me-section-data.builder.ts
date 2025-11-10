import { SectionDataModel } from '../../model/section-data.model';

export class AboutMeSectionDataBuilder {
  build(): SectionDataModel {
    return {
      id: 'aboutMe',
      label: 'About me',
      href: '#about-me',
    };
  }
}
