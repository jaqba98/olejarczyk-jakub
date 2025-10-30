import { ResumeDataBuilderModel } from '../../../builder/model/data/resume-data-builder.model';
import { BaseStoreModel } from '../base/base-store.model';

export interface ResumeStoreModel extends BaseStoreModel {
  resumeData: ResumeDataBuilderModel;
}
