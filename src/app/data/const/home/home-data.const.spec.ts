import { HomeDomainDataModel } from '../../model/domain/home-domain-data.model';
import { homeDataConst } from './home-data.const';

describe('Data Const: Home', () => {
  it('should return valid data', () => {
    const data: HomeDomainDataModel = {
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
