import { BaseCompose } from '../model/base/base-combo.model';
import { HomeDomain } from '../model/domain/home-domain.model';

export const homeDomainConst: BaseCompose.Model<HomeDomain.Data, HomeDomain.Metadata> = {
  data: {
    greeting: "Hello, I'm",
  },
  metadata: {
    test: 'test',
  },
};
