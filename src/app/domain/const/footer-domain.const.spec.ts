import { BaseCompose } from '../model/base/base-combo.model';
import { FooterDomain } from '../model/domain/footer-domain.model';
import { footerDomainConst } from './footer-domain.const';

describe('Footer Domain Const', () => {
  it('Should return the correct data', () => {
    const correctData: BaseCompose.Model<FooterDomain.Data, FooterDomain.Metadata> = {
      data: {
        rightsDescription: 'All rights reserved.',
      },
      metadata: {
        test: 'test',
      },
    };
    expect(footerDomainConst).toEqual(correctData);
  });
});
