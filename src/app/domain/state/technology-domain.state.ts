import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { StateNameDomainEnum } from '../enum/state-name-domain.enum';
import { TechnologyStateDomainModel } from '../model/state/technology-state-domain.model';
import { technologyDataDomainConst } from '../const/data/technology-data-domain.const';

@State<TechnologyStateDomainModel>({
  name: StateNameDomainEnum.technology,
  defaults: technologyDataDomainConst,
})
@Injectable()
export class TechnologyDomainState {
  @Selector()
  static getState(state: TechnologyStateDomainModel) {
    return state;
  }
}
