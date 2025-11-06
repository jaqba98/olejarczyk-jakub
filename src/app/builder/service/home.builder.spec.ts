import { homeDomainConst } from '../../domain/const/home-domain.const';
import { HomeBuilderModel } from '../model/builder/home-builder.model';
import { HomeBuilder } from './home.builder';

describe('Home Builder', () => {
  it('Should return the correct data', () => {
    const result: HomeBuilderModel = { ...homeDomainConst, extend: {} };
    expect(HomeBuilder.buildData()).toEqual(result);
  });
});
