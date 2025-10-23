import { SvgModel } from '../../../../model/svg.model';
import { SocialMediaIdDomainType } from '../../../type/id/social-media-id-domain.type';

export interface SocialMediaDataStateModel {
  id: SocialMediaIdDomainType;
  url: string;
  svg: SvgModel;
}

export type SocialMediaDataStateDomainModel = Record<
  SocialMediaIdDomainType,
  SocialMediaDataStateModel
>;
