import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyStateModel } from './technology-state.model';
import { SvgConst } from '../../const/svg.const';
import { TechnologyDomainMockType } from '../../domain/type/technology-domain.type';

@State<TechnologyStateModel<TechnologyDomainMockType>>({
  name: 'technologyMock',
  defaults: {
    technology1: {
      name: 'Technology 1',
      level: 'beginner',
      ownGroups: [],
      groups: {
        aprSystem: [],
        primaris: [],
      },
      category: 'markupLanguage',
      icon: SvgConst.html,
      order: 0,
    },
    technology2: {
      name: 'Technology 1',
      level: 'beginner',
      ownGroups: [],
      groups: {
        aprSystem: [],
        primaris: [],
      },
      category: 'markupLanguage',
      icon: SvgConst.html,
      order: 0,
    },
    technology3: {
      name: 'Technology 1',
      level: 'beginner',
      ownGroups: [],
      groups: {
        aprSystem: [],
        primaris: [],
      },
      category: 'markupLanguage',
      icon: SvgConst.html,
      order: 0,
    },
    technology4: {
      name: 'Technology 1',
      level: 'beginner',
      ownGroups: [],
      groups: {
        aprSystem: [],
        primaris: [],
      },
      category: 'markupLanguage',
      icon: SvgConst.html,
      order: 0,
    },
    technology5: {
      name: 'Technology 1',
      level: 'beginner',
      ownGroups: [],
      groups: {
        aprSystem: [],
        primaris: [],
      },
      category: 'markupLanguage',
      icon: SvgConst.html,
      order: 0,
    },
    technology6: {
      name: 'Technology 1',
      level: 'beginner',
      ownGroups: [],
      groups: {
        aprSystem: [],
        primaris: [],
      },
      category: 'markupLanguage',
      icon: SvgConst.html,
      order: 0,
    },
    technology7: {
      name: 'Technology 1',
      level: 'beginner',
      ownGroups: [],
      groups: {
        aprSystem: [],
        primaris: [],
      },
      category: 'markupLanguage',
      icon: SvgConst.html,
      order: 0,
    },
    technology8: {
      name: 'Technology 1',
      level: 'beginner',
      ownGroups: [],
      groups: {
        aprSystem: [],
        primaris: [],
      },
      category: 'markupLanguage',
      icon: SvgConst.html,
      order: 0,
    },
    technology9: {
      name: 'T9echnology 1',
      level: 'beginner',
      ownGroups: [],
      groups: {
        aprSystem: [],
        primaris: [],
      },
      category: 'markupLanguage',
      icon: SvgConst.html,
      order: 0,
    },
    technology10: {
      name: 'Technology 1',
      level: 'beginner',
      ownGroups: [],
      groups: {
        aprSystem: [],
        primaris: [],
      },
      category: 'markupLanguage',
      icon: SvgConst.html,
      order: 0,
    },
  },
})
@Injectable()
export class TechnologyMockState {
  @Selector()
  static getState(state: TechnologyStateModel<TechnologyDomainMockType>) {
    return state;
  }
}
