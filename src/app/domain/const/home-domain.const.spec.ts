import { BaseCompose } from '../../data/model/base/base-combo-data.model';
import { HomeDomain } from '../model/domain/home-domain.model';
import { homeDomainConst } from './home-domain.const';

describe('Home Domain Const', () => {
  it('Should return the correct data', () => {
    const correctData: BaseCompose.Model<HomeDomain.Data, HomeDomain.Metadata> = {
      data: {
        greeting: "Hello, I'm",
      },
      metadata: {
        test: 'test',
      },
    };
    expect(homeDomainConst).toEqual(correctData);
  });
});
