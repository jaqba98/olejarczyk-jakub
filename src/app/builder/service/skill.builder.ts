import { skillDomainConst } from '../../domain/const/skill-domain.const';
import { SkillBuilderModel } from '../model/builder/skill-builder.model';

export class SkillBuilder {
  static buildData(): SkillBuilderModel {
    return { ...skillDomainConst, extend: {} };
  }
}
