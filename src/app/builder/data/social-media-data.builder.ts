import { socialMediaDomainConst } from '../../domain/const/social-media-domain.const';
import { SocialMediaDataBuilderModel } from '../model/data/social-media-data-builder.model';

export class SocialMediaDataBuilder {
  static buildData(): SocialMediaDataBuilderModel[] {
    return Object.values(socialMediaDomainConst)
      .sort((prev, next) => prev.metadata.order - next.metadata.order)
      .map((sectionDomain) => sectionDomain.data);
  }
}
