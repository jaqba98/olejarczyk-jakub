import { BaseDomain } from '../model/base-domain.model';
import { SkillDomain } from '../model/skill-domain.model';

export const skillDomainConst: BaseDomain.Model<SkillDomain.Data, SkillDomain.Metadata> = {
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
  metadata: {},
};
