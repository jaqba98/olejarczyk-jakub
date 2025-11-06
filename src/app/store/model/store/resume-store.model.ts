import { ResumeBuilderModel } from '../../../builder/model/builder/resume-builder.model';
import { BaseStoreModel } from '../base/base-store.model';

export interface ResumeStoreModel extends BaseStoreModel {
  resumeBuilder: ResumeBuilderModel;
}
