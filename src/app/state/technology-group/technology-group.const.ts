import { TechnologyGroupStateModel } from '../../domain/model/state/technology-group-state-domain.model';

export const TechnologyGroupConst: TechnologyGroupStateModel = {
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
