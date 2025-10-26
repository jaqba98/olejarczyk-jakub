import { SvgConst } from '../../../const/svg.const';
import { SocialMediaDataStateDomainModel } from '../../../domain/model/social-media-domain.model';
import { socialMediaDataDomainConst } from './social-media-data-domain.const';

describe('Social Media Data Domain Const', () => {
  it('should return correct data', () => {
    const correctResult: SocialMediaDataStateDomainModel = {
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
    expect(socialMediaDataDomainConst).toEqual(correctResult);
  });
});
