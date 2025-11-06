import { FooterDomain } from '../../../domain/model/domain/footer-domain.model';

export interface FooterDataBuilderModel extends FooterDomain.Data {
  currentYear: number;
}
