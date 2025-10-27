import { homeDomainConst } from '../../domain/const/home-domain.const';
import { HomeDataBuilderModel } from '../model/data/home-data-builder.model';
import { HomeDataBuilder } from './home-data.builder';

describe('Home Data Builder', () => {
  it('Should return the correct data', () => {
    const correctData: HomeDataBuilderModel = homeDomainConst.data;
    expect(HomeDataBuilder.buildData()).toEqual(correctData);
  });
});
