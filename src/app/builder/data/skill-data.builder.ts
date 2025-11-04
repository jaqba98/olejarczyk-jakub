import { skillDomainConst } from '../../domain/const/skill-domain.const';
import { SkillDataBuilderModel } from '../model/data/skill-data-builder.model';

export class SkillDataBuilder {
  static buildData(): SkillDataBuilderModel {
    return skillDomainConst.data;
  }
}
