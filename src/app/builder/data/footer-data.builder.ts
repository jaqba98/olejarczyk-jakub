import { footerDomainConst } from '../../domain/const/footer-domain.const';
import { FooterDataBuilderModel } from '../model/data/footer-data-builder.model';

export class FooterDataBuilder {
  static buildData(): FooterDataBuilderModel {
    const { data } = footerDomainConst;
    const currentYear = new Date().getFullYear();
    return { ...data, currentYear };
  }
}
