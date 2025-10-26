import { configDomainConst } from '../../domain/const/config-domain.const';
import { ConfigDataBuilderModel } from '../model/data/config-data-builder.model';

export class ConfigDataBuilder {
  static buildData(): ConfigDataBuilderModel {
    const { data } = configDomainConst;
    const currentYear = new Date().getFullYear();
    return { ...data, currentYear };
  }
}
