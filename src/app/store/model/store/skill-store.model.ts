import { SkillBuilderModel } from '../../../builder/model/builder/skill-builder.model';
import { BaseStoreModel } from '../base/base-store.model';

export interface SkillStoreModel extends BaseStoreModel {
  skillBuilder: SkillBuilderModel;
}
