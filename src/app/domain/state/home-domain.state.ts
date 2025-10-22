import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { HomeStateDomainModel } from '../model/state/home-state-domain.model';
import { StateNameDomainEnum } from '../enum/state-name-domain.enum';
import { homeDataDomainConst } from '../const/data/home-data-domain.const';

@State<HomeStateDomainModel>({
  name: StateNameDomainEnum.home,
  defaults: homeDataDomainConst,
})
@Injectable()
export class HomeDomainState {
  @Selector()
  static getState(state: HomeStateDomainModel) {
    return state;
  }
}
