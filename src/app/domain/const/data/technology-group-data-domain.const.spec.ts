import { TechnologyGroupStateDomainModel } from '../../model/state/technology-group-state-domain.model';
import { technologyGroupDataDomainConst } from './technology-group-data-domain.const';

describe('Technology Group Data Domain Const', () => {
  it('should return correct data', () => {
    const correctResult: TechnologyGroupStateDomainModel = {
      frontend: {
        id: 'frontend',
        order: 0,
      },
      backend: {
        id: 'backend',
        order: 1,
      },
      devops: {
        id: 'devops',
        order: 2,
      },
      integration: {
        id: 'integration',
        order: 3,
      },
      ai: {
        id: 'ai',
        order: 4,
      },
      common: {
        id: 'common',
        order: 5,
      },
    };
    expect(technologyGroupDataDomainConst).toEqual(correctResult);
  });
});
