import { SvgModel } from '../../model/svg.model';
import { SocialMediaHrefDomainType } from '../type/href/social-media-href-domain.type';
import { SocialMediaKindDomainType } from '../type/kind/social-media-kind-domain.type';

export namespace SocialMediaDomain {
  export interface Data {
    href: SocialMediaHrefDomainType;
    svg: SvgModel;
  }

  export interface Metadata {
    kind: SocialMediaKindDomainType;
    order: number;
  }
}
