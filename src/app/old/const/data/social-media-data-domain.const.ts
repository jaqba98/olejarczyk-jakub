import { SvgConst } from '../../../const/svg.const';
import { SocialMediaDataStateDomainModel } from '../../../domain/model/social-media-domain.model';

export const socialMediaDataDomainConst: SocialMediaDataStateDomainModel = {
  github: {
    id: 'github',
    url: 'https://github.com/jaqba98',
    svg: SvgConst.github,
  },
  npm: {
    id: 'npm',
    url: 'https://www.npmjs.com/~jaqba98',
    svg: SvgConst.npm,
  },
};
