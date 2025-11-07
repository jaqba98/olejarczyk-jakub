import { BaseDataModel } from '../../model/base/base-data.model';
import { HomeFieldDataType } from '../../type/field/home-field-data.type';
import { homeDataConst } from './home-data.const';

describe('Data Const: Home', () => {
  it('should return valid data', () => {
    const data: BaseDataModel<HomeFieldDataType> = {
      field: {
        greeting: {
          kind: 'string',
          value: "Hello, I'm",
        },
      },
    };
    expect(homeDataConst).toEqual(data);
  });
});
