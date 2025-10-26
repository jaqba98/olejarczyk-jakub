import _ from 'lodash';

import { SocialMediaDataBuilder } from './social-media-data.builder';
import { SocialMediaDataBuilderModel } from '../model/data/social-media-data-builder.model';
import { socialMediaDomainConst } from '../../domain/const/social-media-domain.const';

describe('Social Media Data Builder', () => {
  it('Should return all social medias', () => {
    const inputSocialMedial = SocialMediaDataBuilder.buildData();
    const resultSocialMedias: SocialMediaDataBuilderModel[] = [
      socialMediaDomainConst.linkedin.data,
      socialMediaDomainConst.github.data,
      socialMediaDomainConst.gitlab.data,
      socialMediaDomainConst.npm.data,
    ];
    expect(_.isEqual(inputSocialMedial, resultSocialMedias)).toBeTruthy();
  });
});
