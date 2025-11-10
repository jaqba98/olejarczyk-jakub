import { SectionDataModel } from '../../model/section-data.model';

export class ProjectSectionDataBuilder {
  build(): SectionDataModel {
    return {
      id: 'project',
      label: 'Project',
      href: '#project',
    };
  }
}
