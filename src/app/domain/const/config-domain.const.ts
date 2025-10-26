import { BaseDomain } from '../model/base-domain.model';

import { ConfigDomain } from '../model/config-domain.model';

export const configDomainConst: BaseDomain.Model<ConfigDomain.Data, ConfigDomain.Metadata> = {
  data: {
    rightsDescription: 'All rights reserved.',
  },
  metadata: {},
};
