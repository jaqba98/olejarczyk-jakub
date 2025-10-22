import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { StateNameDomainEnum } from '../enum/state-name-domain.enum';
import { MainNavStateDomainModel } from '../model/state/main-nav-state-domain.model';
import { mainNavDataDomainConst } from '../const/data/main-nav-data-domain.const';

@State<MainNavStateDomainModel>({
  name: StateNameDomainEnum.mainNav,
  defaults: mainNavDataDomainConst,
})
@Injectable()
export class MainNavDomainState {
  @Selector()
  static getState(state: MainNavStateDomainModel) {
    return state;
  }
}
