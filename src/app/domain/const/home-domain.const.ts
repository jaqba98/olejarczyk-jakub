import { BaseDomain } from '../model/base-domain.model';
import { HomeDomain } from '../model/home-domain.model';

export const homeDomainConst: BaseDomain.Model<HomeDomain.Data, HomeDomain.Metadata> = {
  data: {
    greeting: "Hello, I'm",
  },
  metadata: {},
};
