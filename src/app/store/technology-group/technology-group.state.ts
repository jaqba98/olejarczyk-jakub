import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyGroupStateModel } from './technology-group-state.model';
import { SvgConst } from '../../const/svg.const';

@State<TechnologyGroupStateModel>({
  name: 'technologyGroup',
  defaults: {
    frontend: {
      name: 'Frontend',
      svg: SvgConst.html,
    },
    backend: {
      name: 'Backend',
      svg: SvgConst.html,
    },
    devops: {
      name: 'DevOps',
      svg: SvgConst.html,
    },
    integration: {
      name: 'Integration',
      svg: SvgConst.html,
    },
    ai: {
      name: 'AI',
      svg: SvgConst.html,
    },
    common: {
      name: 'Common',
      svg: SvgConst.html,
    },
  },
})
@Injectable()
export class TechnologyGroupState {
  @Selector()
  static getState(state: TechnologyGroupStateModel) {
    return state;
  }
}
