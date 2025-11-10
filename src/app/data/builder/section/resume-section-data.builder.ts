import { SectionDataModel } from '../../model/section-data.model';

export class ResumeSectionDataBuilder {
  build(): SectionDataModel {
    return {
      id: 'resume',
      label: 'Resume',
      href: '#resume',
    };
  }
}
