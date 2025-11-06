import { footerDomainConst } from '../../domain/const/footer-domain.const';
import { FooterBuilderModel } from '../model/builder/footer-builder.model';
import { FooterBuilder } from './footer.builder';

describe('Footer Builder', () => {
  it('Should return the correct data', () => {
    const result: FooterBuilderModel = {
      ...footerDomainConst,
      extend: {
        currentYear: new Date().getFullYear(),
      },
    };
    expect(FooterBuilder.buildData()).toEqual(result);
  });
});
