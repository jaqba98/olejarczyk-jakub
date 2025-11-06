import { educationDomainConst } from '../../domain/const/education-domain.const';
import { EducationBuilderModel } from '../model/builder/education-builder.model';

export class EducationBuilder {
  static buildData(): EducationBuilderModel {
    return Object.values(educationDomainConst)
      .sort((prev, next) => prev.metadata.order - next.metadata.order)
      .filter((education) => education.data.endYear)
      .sort((prev, next) => next.data.startYear - prev.data.startYear)
      .map((education) => ({ ...education, extend: {} }));
  }
}
