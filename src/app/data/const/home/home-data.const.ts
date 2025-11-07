import { HomeDomainDataModel } from '../../model/domain/home-domain-data.model';

export const homeDataConst: HomeDomainDataModel = {
  field: {
    greeting: {
      type: 'string',
      value: {
        type: 'single',
        value: "Hello, I'm",
      },
    },
  },
};
