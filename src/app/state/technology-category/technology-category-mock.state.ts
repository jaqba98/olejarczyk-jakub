import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyCategoryStateModel } from './technology-category-state.model';
import { TechnologyCategoryDomainMockType } from '../../domain/type/technology-category-domain.type';

@State<TechnologyCategoryStateModel<TechnologyCategoryDomainMockType>>({
  name: 'technologyCategoryMock',
  defaults: {
    category1: {
      order: 0,
    },
    category2: {
      order: 1,
    },
    category3: {
      order: 2,
    },
  },
})
@Injectable()
export class TechnologyCategoryMockState {
  @Selector()
  static getState(state: TechnologyCategoryStateModel<TechnologyCategoryDomainMockType>) {
    return state;
  }
}
