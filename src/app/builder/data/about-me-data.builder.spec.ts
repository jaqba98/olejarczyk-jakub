import { aboutMeDomainConst } from '../../domain/const/about-me-domain.const';
import { AboutMeDataBuilderModel } from '../model/data/about-me-data-builder.model';
import { AboutMeDataBuilder } from './about-me-data.builder';

describe('About Me Data Builder', () => {
  it('Should return the correct data', () => {
    const correctData: AboutMeDataBuilderModel = aboutMeDomainConst.data;
    expect(AboutMeDataBuilder.buildData()).toEqual(correctData);
  });
});
