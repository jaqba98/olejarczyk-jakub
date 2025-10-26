import { configDomainConst } from '../../domain/const/config-domain.const';
import { ConfigDataBuilderModel } from '../model/data/config-data-builder.model';
import { ConfigDataBuilder } from './config-data.builder';

describe('Config Data Builder', () => {
  it('Should return the correct data', () => {
    const correctData: ConfigDataBuilderModel = {
      ...configDomainConst.data,
      currentYear: new Date().getFullYear(),
    };
    expect(ConfigDataBuilder.buildData()).toEqual(correctData);
  });
});
