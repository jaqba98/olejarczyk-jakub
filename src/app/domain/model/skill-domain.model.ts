import { LanguageLevelDomainType } from '../type/level/language-level-domain.type';
import { LanguageNameDomainType } from '../type/name/language-name-domain.type';

export namespace SkillDomain {
  interface LanguageModel {
    name: LanguageNameDomainType;
    level: LanguageLevelDomainType;
    order: number;
  }

  export interface Data {
    languages: LanguageModel[];
  }

  export interface Metadata {}
}
