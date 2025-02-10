import { SkillsTitleEnum, SkillsClassNameEnum } from '../enum/skills.enum';

export interface TechnologyModel {
  title: SkillsTitleEnum;
  className: SkillsClassNameEnum;
  colored: boolean;
}

export interface SkillModel {
  title: string;
  technologies: TechnologyModel[];
}

export interface SkillsModel {
  skills: SkillModel[];
}
