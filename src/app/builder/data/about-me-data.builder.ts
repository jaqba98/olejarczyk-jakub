import { aboutMeDomainConst } from '../../domain/const/about-me-domain.const';
import { AboutMeDataBuilderModel } from '../model/data/about-me-data-builder.model';

export class AboutMeDataBuilder {
  static buildData(): AboutMeDataBuilderModel {
    return aboutMeDomainConst.data;
  }
}
