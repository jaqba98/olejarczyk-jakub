import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ExperienceStateModel } from './experience-state.model';

@State<ExperienceStateModel>({
  name: 'experienceMock',
  defaults: [
    {
      company: 'aprSystem',
      title: 'Full Stack Developer',
      employment: 'Full-time',
      startDate: new Date(2000, 1, 1),
      endDate: new Date(2001, 1, 1),
      location: 'Remote',
      description: ['Lorem ipsum 1', 'Lorem ipsum 2'],
      technologies: ['html', 'css', 'sass'],
      order: 0,
    },
    {
      company: 'primaris',
      title: 'Integration Engineer',
      employment: 'Full-time',
      startDate: new Date(2001, 1, 1),
      endDate: null,
      location: 'On-site',
      description: [
        'Lorem ipsum 1',
        'Lorem ipsum 2',
        'Lorem ipsum 3',
        'Lorem ipsum 4',
        'Lorem ipsum 5',
        'Lorem ipsum 6',
      ],
      technologies: ['git', 'gitlab', 'gitlab'],
      order: 1,
    },
  ],
})
@Injectable()
export class ExperienceMockState {
  @Selector()
  static getState(state: ExperienceStateModel) {
    return state;
  }
}
