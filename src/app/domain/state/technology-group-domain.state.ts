import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { StateNameDomainEnum } from '../enum/state-name-domain.enum';
import { TechnologyGroupStateDomainModel } from '../model/state/technology-group-state-domain.model';
import { technologyGroupDataDomainConst } from '../const/data/technology-group-data-domain.const';

@State<TechnologyGroupStateDomainModel>({
  name: StateNameDomainEnum.technologyGroup,
  defaults: technologyGroupDataDomainConst,
})
@Injectable()
export class TechnologyGroupDomainState {
  @Selector()
  static getState(state: TechnologyGroupStateDomainModel) {
    return state;
  }
}
