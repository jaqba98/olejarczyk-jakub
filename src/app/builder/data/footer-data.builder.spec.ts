import { footerDomainConst } from '../../domain/const/footer-domain.const';
import { FooterDataBuilderModel } from '../model/data/footer-data-builder.model';
import { FooterDataBuilder } from './footer-data.builder';

describe('Footer Data Builder', () => {
  it('Should return the correct data', () => {
    const correctData: FooterDataBuilderModel = {
      ...footerDomainConst.data,
      currentYear: new Date().getFullYear(),
    };
    expect(FooterDataBuilder.buildData()).toEqual(correctData);
  });
});
