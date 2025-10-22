import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { NavSectionStateDomainModel } from '../../model/state/section/nav-section-state-domain.model';
import { StateNameDomainEnum } from '../../enum/state-name-domain.enum';
import { navSectionDomainConst } from '../../const/section/nav-section-domain.const';

@State<NavSectionStateDomainModel>({
  name: StateNameDomainEnum.navSection,
  defaults: navSectionDomainConst,
})
@Injectable()
export class NavSectionDomainState {
  @Selector()
  static getState(state: NavSectionStateDomainModel) {
    return state;
  }
}
