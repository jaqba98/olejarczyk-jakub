import { FooterDomain } from '../../../domain/model/footer-domain.model';

export interface FooterDataBuilderModel extends FooterDomain.Data {
  currentYear: number;
}
