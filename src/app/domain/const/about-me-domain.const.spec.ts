import { AboutMeDomain } from '../model/about-me-domain.model';
import { BaseDomain } from '../model/base-domain.model';
import { aboutMeDomainConst } from './about-me-domain.const';

describe('About Me Domain Const', () => {
  it('Should return the correct data', () => {
    const correctData: BaseDomain.Model<AboutMeDomain.Data, AboutMeDomain.Metadata> = {
      data: {
        descriptions: [],
      },
      metadata: {},
    };
    expect(aboutMeDomainConst).toEqual(correctData);
  });
});
