import { BaseDomain } from '../model/base-domain.model';
import { ConfigDomain } from '../model/config-domain.model';
import { configDomainConst } from './config-domain.const';

describe('Config Domain Const', () => {
  it('Should return the correct data', () => {
    const correctData: BaseDomain.Model<ConfigDomain.Data, ConfigDomain.Metadata> = {
      data: {
        rightsDescription: 'All rights reserved.',
      },
      metadata: {},
    };
    expect(configDomainConst).toEqual(correctData);
  });
});
