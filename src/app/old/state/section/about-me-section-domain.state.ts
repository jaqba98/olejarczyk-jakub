import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { AboutMeSectionStateDomainModel } from '../../model/state/section/about-me-section-state-domain.model';
import { StateNameDomainEnum } from '../../enum/state-name-domain.enum';
import { aboutMeSectionDataDomainConst } from '../../const/section/about-me-section-domain.const';

@State<AboutMeSectionStateDomainModel>({
  name: StateNameDomainEnum.aboutMeSection,
  defaults: aboutMeSectionDataDomainConst,
})
@Injectable()
export class AboutMeSectionDomainState {
  @Selector()
  static getState(state: AboutMeSectionStateDomainModel) {
    return state;
  }
}
