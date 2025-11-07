import { BaseDataModel } from '../../model/base-data.model';
import { homeDataConst } from './home-data.const';

describe('Data Const: Home', () => {
  it('should return valid data', () => {
    const data: BaseDataModel = {
      field: {
        greeting: {
          kind: 'string',
          value: {
            kind: 'single',
            value: "Hello, I'm",
          },
        },
      },
    };
    expect(homeDataConst).toEqual(data);
  });
});
