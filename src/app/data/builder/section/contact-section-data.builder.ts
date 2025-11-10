import { SectionDataModel } from '../../model/section-data.model';

export class ContactSectionDataBuilder {
  build(): SectionDataModel {
    return {
      id: 'contact',
      label: 'Contact',
      href: '#contact',
    };
  }
}
