import { homeDomainConst } from '../../domain/const/home-domain.const';
import { HomeDataBuilderModel } from '../model/data/home-data-builder.model';

export class HomeDataBuilder {
  static buildData(): HomeDataBuilderModel {
    return homeDomainConst.data;
  }
}
