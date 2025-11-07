import { FooterDomainDataModel } from '../../model/domain/footer-domain-data.model';
import { footerDataConst } from './footer-data.const';

describe('Data Const: Footer', () => {
  it('should return valid data', () => {
    const data: FooterDomainDataModel = {
      field: {
        rightsDescription: {
          kind: 'string',
          value: 'All rights reserved.',
        },
      },
    };
    expect(footerDataConst).toEqual(data);
  });
});
