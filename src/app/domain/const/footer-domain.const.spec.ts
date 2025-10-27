import { BaseDomain } from '../model/base-domain.model';
import { FooterDomain } from '../model/footer-domain.model';
import { footerDomainConst } from './footer-domain.const';

describe('Footer Domain Const', () => {
  it('Should return the correct data', () => {
    const correctData: BaseDomain.Model<FooterDomain.Data, FooterDomain.Metadata> = {
      data: {
        rightsDescription: 'All rights reserved.',
      },
      metadata: {},
    };
    expect(footerDomainConst).toEqual(correctData);
  });
});
