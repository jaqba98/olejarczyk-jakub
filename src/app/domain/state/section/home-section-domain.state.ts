import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { StateNameDomainEnum } from '../../enum/state-name-domain.enum';
import { homeSectionDataDomainConst } from '../../const/section/home-section-domain.const';
import { HomeSectionStateDomainModel } from '../../model/state/section/home-section-state-domain.model';

@State<HomeSectionStateDomainModel>({
  name: StateNameDomainEnum.homeSection,
  defaults: homeSectionDataDomainConst,
})
@Injectable()
export class HomeSectionDomainState {
  @Selector()
  static getState(state: HomeSectionStateDomainModel) {
    return state;
  }
}
