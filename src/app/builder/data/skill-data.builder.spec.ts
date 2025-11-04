import { skillDomainConst } from '../../domain/const/skill-domain.const';
import { SkillDataBuilderModel } from '../model/data/skill-data-builder.model';
import { SkillDataBuilder } from './skill-data.builder';

describe('Skills Data Builder', () => {
  it('Should return the correct data', () => {
    const correctData: SkillDataBuilderModel = skillDomainConst.data;
    expect(SkillDataBuilder.buildData()).toEqual(correctData);
  });
});
