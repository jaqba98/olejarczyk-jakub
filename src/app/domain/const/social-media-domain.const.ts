import { SvgConst } from '../../const/svg.const';
import { BaseDomain } from '../model/base-domain.model';
import { SocialMediaDomain } from '../model/social-media-domain.model';
import { SocialMediaKindDomainType } from '../type/kind/social-media-kind-domain.type';

export const socialMediaDomainConst: BaseDomain.Type<
  SocialMediaKindDomainType,
  SocialMediaDomain.Data,
  SocialMediaDomain.Metadata
> = {
  linkedin: {
    data: {
      href: 'https://www.linkedin.com/in/jakub-olejarczyk/',
      svg: SvgConst.linkedin,
    },
    metadata: {
      kind: 'linkedin',
      order: 0,
    },
  },
  github: {
    data: {
      href: 'https://github.com/jaqba98',
      svg: SvgConst.github,
    },
    metadata: {
      kind: 'github',
      order: 1,
    },
  },
  gitlab: {
    data: {
      href: 'https://gitlab.com/jaqba98',
      svg: SvgConst.gitlab,
    },
    metadata: {
      kind: 'gitlab',
      order: 2,
    },
  },
  npm: {
    data: {
      href: 'https://www.npmjs.com/~jaqba98',
      svg: SvgConst.npm,
    },
    metadata: {
      kind: 'npm',
      order: 3,
    },
  },
};
