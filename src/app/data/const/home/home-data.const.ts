import { BaseDataModel } from '../../model/base/base-data.model';
import { HomeFieldDataType } from '../../type/field/home-field-data.type';

export const homeDataConst: BaseDataModel<HomeFieldDataType> = {
  field: {
    greeting: {
      kind: 'string',
      value: "Hello, I'm",
    },
  },
};
