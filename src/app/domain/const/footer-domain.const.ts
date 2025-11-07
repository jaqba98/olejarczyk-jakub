import { BaseCompose } from '../model/base/base-combo.model';
import { FooterDomain } from '../model/domain/footer-domain.model';

export const footerDomainConst: BaseCompose.Model<FooterDomain.Data, FooterDomain.Metadata> = {
  data: {
    rightsDescription: 'All rights reserved.',
  },
  metadata: {
    test: 'test',
  },
};
