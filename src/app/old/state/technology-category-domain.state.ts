import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { StateNameDomainEnum } from '../enum/state-name-domain.enum';
import { TechnologyCategoryStateDomainModel } from '../model/state/technology-category-state-domain.model';
import { technologyCategoryDataDomainConst } from '../../data/const/technology-category-data.const';

@State<TechnologyCategoryStateDomainModel>({
  name: StateNameDomainEnum.technologyCategory,
  defaults: technologyCategoryDataDomainConst,
})
@Injectable()
export class TechnologyCategoryDomainState {
  @Selector()
  static getState(state: TechnologyCategoryStateDomainModel) {
    return state;
  }
}
