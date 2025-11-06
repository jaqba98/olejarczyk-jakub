import { EducationBuilderModel } from '../../../builder/model/builder/education-builder.model';
import { BaseStoreModel } from '../base/base-store.model';

export interface EducationStoreModel extends BaseStoreModel {
  educationBuilder: EducationBuilderModel;
}
