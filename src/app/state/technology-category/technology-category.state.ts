import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyCategoryStateModel } from '../../domain/model/state/technology-category-state-domain.model';
import { TechnologyCategoryConst } from './technology-category.const';

@State<TechnologyCategoryStateModel>({
  name: 'technologyCategory',
  defaults: TechnologyCategoryConst,
})
@Injectable()
export class TechnologyCategoryState {
  @Selector()
  static getState(state: TechnologyCategoryStateModel) {
    return state;
  }
}
