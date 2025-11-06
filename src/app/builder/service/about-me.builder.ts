import { aboutMeDomainConst } from '../../domain/const/about-me-domain.const';
import { AboutMeBuilderModel } from '../model/builder/about-me-builder.model';

export class AboutMeBuilder {
  static buildData(): AboutMeBuilderModel {
    return { ...aboutMeDomainConst, extend: {} };
  }
}
