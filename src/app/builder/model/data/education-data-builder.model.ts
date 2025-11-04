import { EducationDomain } from '../../../domain/model/education-domain.model';

interface EducationDataModel {
  educations: EducationDomain.Data[];
}

export interface EducationDataBuilderModel extends EducationDataModel {}
