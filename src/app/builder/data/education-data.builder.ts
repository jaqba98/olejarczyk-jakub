import { educationDomainConst } from '../../domain/const/education-domain.const';
import { EducationDataBuilderModel } from '../model/data/education-data-builder.model';

export class EducationDataBuilder {
  static buildData(): EducationDataBuilderModel {
    const educations = Object.values(educationDomainConst)
      .sort((prev, next) => prev.metadata.order - next.metadata.order)
      .filter((education) => education.data.endYear)
      .sort((prev, next) => next.data.startYear - prev.data.startYear)
      .map((education) => education.data);
    return { educations };
  }
}
