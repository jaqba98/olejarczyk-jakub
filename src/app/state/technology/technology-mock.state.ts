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
      ownGroups: ['devops'],
      groups: {
        aprSystem: ['common', 'frontend'],
        primaris: [],
      },
      category: 'containerization',
      icon: SvgConst.html,
      order: 0,
    },
    technology2: {
      name: 'Technology 2',
      level: 'advanced',
      ownGroups: [],
      groups: {
        aprSystem: ['backend'],
        primaris: ['devops'],
      },
      category: 'markupLanguage',
      icon: SvgConst.visualParadigm,
      order: 1,
    },
    technology3: {
      name: 'Technology 3',
      level: 'intermediate',
      ownGroups: [],
      groups: {
        aprSystem: ['ai'],
        primaris: [],
      },
      category: 'programmingLanguage',
      icon: SvgConst.typescript,
      order: 2,
    },
    technology4: {
      name: 'Technology 4',
      level: 'advanced',
      ownGroups: ['integration', 'ai'],
      groups: {
        aprSystem: [],
        primaris: ['integration', 'frontend'],
      },
      category: 'server',
      icon: SvgConst.primeng,
      order: 3,
    },
    technology5: {
      name: 'Technology 5',
      level: 'intermediate',
      ownGroups: ['frontend', 'backend'],
      groups: {
        aprSystem: [],
        primaris: [],
      },
      category: 'versionControlSystem',
      icon: SvgConst.prettier,
      order: 4,
    },
    technology6: {
      name: 'Technology 6',
      level: 'intermediate',
      ownGroups: ['common'],
      groups: {
        aprSystem: ['frontend'],
        primaris: ['backend'],
      },
      category: 'runtime',
      icon: SvgConst.postman,
      order: 6,
    },
    technology7: {
      name: 'Technology 7',
      level: 'beginner',
      ownGroups: ['integration'],
      groups: {
        aprSystem: [],
        primaris: [],
      },
      category: 'containerization',
      icon: SvgConst.prettier,
      order: 7,
    },
    technology8: {
      name: 'Technology 8',
      level: 'intermediate',
      ownGroups: [],
      groups: {
        aprSystem: [],
        primaris: ['common'],
      },
      category: 'stylesheetLanguage',
      icon: SvgConst.nx,
      order: 8,
    },
    technology9: {
      name: 'T9echnology 9',
      level: 'advanced',
      ownGroups: ['devops', 'backend'],
      groups: {
        aprSystem: [],
        primaris: ['backend', 'devops'],
      },
      category: 'editor',
      icon: SvgConst.nodejs,
      order: 9,
    },
    technology10: {
      name: 'Technology 10',
      level: 'beginner',
      ownGroups: ['ai'],
      groups: {
        aprSystem: [],
        primaris: [],
      },
      category: 'database',
      icon: SvgConst.numpy,
      order: 10,
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
