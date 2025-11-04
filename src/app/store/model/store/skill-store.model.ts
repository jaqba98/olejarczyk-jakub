import { SkillDataBuilderModel } from '../../../builder/model/data/skill-data-builder.model';
import { BaseStoreModel } from '../base/base-store.model';

export interface SkillStoreModel extends BaseStoreModel {
  skillData: SkillDataBuilderModel;
}
