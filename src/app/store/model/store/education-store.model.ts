import { EducationDataBuilderModel } from '../../../builder/model/data/education-data-builder.model';
import { BaseStoreModel } from '../base/base-store.model';

export interface EducationStoreModel extends BaseStoreModel {
  educationData: EducationDataBuilderModel;
}
