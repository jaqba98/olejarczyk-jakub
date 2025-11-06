import { skillDomainConst } from '../../domain/const/skill-domain.const';
import { SkillBuilderModel } from '../model/builder/skill-builder.model';
import { SkillBuilder } from './skill.builder';

describe('Skills Builder', () => {
  it('Should return the correct data', () => {
    const result: SkillBuilderModel = { ...skillDomainConst, extend: {} };
    expect(SkillBuilder.buildData()).toEqual(result);
  });
});
