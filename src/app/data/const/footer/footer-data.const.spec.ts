import { BaseDataModel } from '../../model/base-data.model';
import { footerDataConst } from './footer-data.const';

describe('Data Const: Footer', () => {
  it('should return valid data', () => {
    const data: BaseDataModel = {
      field: {
        rightsDescription: {
          kind: 'string',
          value: {
            kind: 'single',
            value: 'All rights reserved.',
          },
        },
      },
    };
    expect(footerDataConst).toEqual(data);
  });
});
