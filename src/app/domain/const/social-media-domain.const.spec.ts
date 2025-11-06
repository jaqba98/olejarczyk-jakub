import { SvgConst } from '../../const/svg.const';
import { BaseCompose } from '../model/base/base-compose.model';
import { SocialMediaDomain } from '../model/domain/social-media-domain.model';
import { SocialMediaKindDomainType } from '../type/kind/social-media-kind-domain.type';
import { socialMediaDomainConst } from './social-media-domain.const';

describe('Social Media Domain Const', () => {
  it('Should return the correct data', () => {
    const correctData: BaseCompose.Type<
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
          test: 'test',
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
          test: 'test',
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
          test: 'test',
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
          test: 'test',
          kind: 'npm',
          order: 3,
        },
      },
    };
    expect(socialMediaDomainConst).toEqual(correctData);
  });
});
