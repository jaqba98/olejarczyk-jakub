import { BaseCompose } from '../../data/model/base/base-combo-data.model';
import { SkillDomain } from '../model/domain/skill-domain.model';

export const skillDomainConst: BaseCompose.Model<SkillDomain.Data, SkillDomain.Metadata> = {
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
