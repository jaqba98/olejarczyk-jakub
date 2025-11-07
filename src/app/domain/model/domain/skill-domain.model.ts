import { LanguageLevelDomainType } from '../../type/level/language-level-domain.type';
import { LanguageNameDomainType } from '../../type/name/language-name-domain.type';
import { BaseDomain } from '../../../data/model/base/base-data.model';

export namespace SkillDomain {
  interface LanguageModel {
    name: LanguageNameDomainType;
    level: LanguageLevelDomainType;
    order: number;
  }

  export interface Data extends BaseDomain.Data {
    languages: LanguageModel[];
  }

  export interface Metadata extends BaseDomain.Metadata {}
}
