import { BaseDataModel } from '../../model/base/base-data.model';
import { FooterFieldDataType } from '../../type/field/footer-field-data.type';
import { footerDataConst } from './footer-data.const';

describe('Data Const: Footer', () => {
  it('should return valid data', () => {
    const data: BaseDataModel<FooterFieldDataType> = {
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
