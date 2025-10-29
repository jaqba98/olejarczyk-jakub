import { ExperienceDataBuilderModel } from '../../../builder/model/data/experience-data-builder.model';
import { BaseStoreModel } from '../base/base-store.model';

export interface ExperienceStoreModel extends BaseStoreModel {
  experienceData: ExperienceDataBuilderModel;
}
