import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ExperienceStateModel } from './experience-state.model';

@State<ExperienceStateModel>({
  name: 'experience',
  defaults: [
    {
      company: 'primaris',
      title: 'Integration Engineer',
      employment: 'Full-time',
      startDate: new Date(2025, 6, 1),
      endDate: null,
      location: 'Remote',
      description: ['Lorem ipsum 1', 'Lorem ipsum 2'],
      technologies: ['html', 'css', 'sass'],
      order: 0,
    },
    {
      company: 'aprSystem',
      title: 'Full Stack Developer',
      employment: 'Full-time',
      startDate: new Date(2020, 8, 1),
      endDate: new Date(2025, 3, 1),
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
export class ExperienceState {
  @Selector()
  static getState(state: ExperienceStateModel) {
    return state;
  }
}
