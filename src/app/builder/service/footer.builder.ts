import { footerDomainConst } from '../../domain/const/footer-domain.const';
import { FooterBuilderModel } from '../model/builder/footer-builder.model';

export class FooterBuilder {
  static buildData(): FooterBuilderModel {
    const currentYear = new Date().getFullYear();
    return {
      ...footerDomainConst,
      extend: { currentYear },
    };
  }
}
