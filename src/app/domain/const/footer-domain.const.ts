import { BaseDomain } from '../model/base-domain.model';
import { FooterDomain } from '../model/footer-domain.model';

export const footerDomainConst: BaseDomain.Model<FooterDomain.Data, FooterDomain.Metadata> = {
  data: {
    rightsDescription: 'All rights reserved.',
  },
  metadata: {},
};
