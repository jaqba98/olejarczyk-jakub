import { SvgModel } from '../../../model/svg.model';
import { SocialMediaHrefDomainType } from '../../type/href/social-media-href-domain.type';
import { SocialMediaKindDomainType } from '../../type/kind/social-media-kind-domain.type';
import { BaseDomain } from '../base/base-domain.model';

export namespace SocialMediaDomain {
  export interface Data extends BaseDomain.Data {
    href: SocialMediaHrefDomainType;
    svg: SvgModel;
  }

  export interface Metadata extends BaseDomain.Metadata {
    kind: SocialMediaKindDomainType;
    order: number;
  }
}
