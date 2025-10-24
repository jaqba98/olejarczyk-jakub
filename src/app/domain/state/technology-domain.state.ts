import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { StateNameDomainEnum } from '../enum/state-name-domain.enum';
import { TechnologyStateDomainModel } from '../../data/model/technology-data.model';
import { technologyDataDomainConst } from '../../data/const/technology-data.const';

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
