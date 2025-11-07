import { BaseDataModel } from '../../model/base-data.model';

export const homeDataConst: BaseDataModel = {
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
