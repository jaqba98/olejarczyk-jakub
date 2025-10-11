import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyGroupStateModel } from './technology-group-state.model';

@State<TechnologyGroupStateModel>({
  name: 'technologyGroup',
  defaults: {
    frontend: {
      name: 'Frontend',
      svg: {
        paths: [],
        width: '',
        height: '',
        viewBox: '',
        fill: '',
        stroke: '',
      },
    },
    backend: {
      name: 'Backend',
      svg: {
        paths: [],
        width: '',
        height: '',
        viewBox: '',
        fill: '',
        stroke: '',
      },
    },
    devops: {
      name: 'DevOps',
      svg: {
        paths: [],
        width: '',
        height: '',
        viewBox: '',
        fill: '',
        stroke: '',
      },
    },
    integration: {
      name: 'Integration',
      svg: {
        paths: [],
        width: '',
        height: '',
        viewBox: '',
        fill: '',
        stroke: '',
      },
    },
    ai: {
      name: 'AI',
      svg: {
        paths: [],
        width: '',
        height: '',
        viewBox: '',
        fill: '',
        stroke: '',
      },
    },
    common: {
      name: 'Common',
      svg: {
        paths: [],
        width: '',
        height: '',
        viewBox: '',
        fill: '',
        stroke: '',
      },
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
