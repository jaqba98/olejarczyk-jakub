import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { SocialMediaDataStateDomainModel } from '../../model/state/data/social-media-data-state-domain.model';
import { StateNameDomainEnum } from '../../enum/state-name-domain.enum';
import { socialMediaDataDomainConst } from '../../const/data/social-media-data-domain.const';

@State<SocialMediaDataStateDomainModel>({
  name: StateNameDomainEnum.socialMediaData,
  defaults: socialMediaDataDomainConst,
})
@Injectable()
export class SocialMediaDataDomainState {
  @Selector()
  static getState(state: SocialMediaDataStateDomainModel) {
    return state;
  }
}
