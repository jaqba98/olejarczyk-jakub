import { BaseCompose } from '../model/base/base-combo.model';
import { SkillDomain } from '../model/domain/skill-domain.model';
import { skillDomainConst } from './skill-domain.const';

describe('Skill Me Domain Const', () => {
  it('Should return the correct data', () => {
    const correctData: BaseCompose.Model<SkillDomain.Data, SkillDomain.Metadata> = {
      data: {
        languages: [
          {
            name: 'English',
            level: 'B1',
            order: 0,
          },
          {
            name: 'Polish',
            level: 'Native',
            order: 1,
          },
          {
            name: 'German',
            level: 'A1',
            order: 2,
          },
        ],
      },
      metadata: {
        test: 'test',
      },
    };
    expect(skillDomainConst).toEqual(correctData);
  });
});
