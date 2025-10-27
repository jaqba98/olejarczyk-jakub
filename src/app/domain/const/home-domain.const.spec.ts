import { BaseDomain } from '../model/base-domain.model';
import { HomeDomain } from '../model/home-domain.model';
import { homeDomainConst } from './home-domain.const';

describe('Home Domain Const', () => {
  it('Should return the correct data', () => {
    const correctData: BaseDomain.Model<HomeDomain.Data, HomeDomain.Metadata> = {
      data: {
        greeting: "Hello, I'm",
      },
      metadata: {},
    };
    expect(homeDomainConst).toEqual(correctData);
  });
});
