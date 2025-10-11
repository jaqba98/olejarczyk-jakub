import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyGroupStateModel } from './technology-group-state.model';
import { SvgConst } from '../../const/svg.const';

@State<TechnologyGroupStateModel>({
  name: 'technologyGroup',
  defaults: {
    frontend: {
      name: 'Frontend',
      svg: SvgConst.frontend,
    },
    backend: {
      name: 'Backend',
      svg: SvgConst.backend,
    },
    devops: {
      name: 'DevOps',
      svg: SvgConst.devops,
    },
    integration: {
      name: 'Integration',
      svg: SvgConst.integration,
    },
    ai: {
      name: 'AI',
      svg: SvgConst.ai,
    },
    common: {
      name: 'Common',
      svg: SvgConst.common,
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
