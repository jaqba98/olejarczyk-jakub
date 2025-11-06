import { homeDomainConst } from '../../domain/const/home-domain.const';
import { HomeBuilderModel } from '../model/builder/home-builder.model';

export class HomeBuilder {
  static buildData(): HomeBuilderModel {
    return { ...homeDomainConst, extend: {} };
  }
}
