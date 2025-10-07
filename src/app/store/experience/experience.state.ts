import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ExperienceStateModel } from './experience-state.model';

@State<ExperienceStateModel>({
  name: 'experience',
  defaults: {
    aprSystem: [
      {
        title: 'Full Stack Developer',
        employmentType: 'Full-time',
        startDate: new Date('2020-08-01'),
        endDate: new Date('2025-03-01'),
        locationType: 'On-site',
        description: [
          'Developed and styled user interfaces using HTML, CSS/SCSS, JavaScript, TypeScript, and the Angular framework.',
          'Built dynamic and reusable components in the Storybook environment using the PrimeNG library.',
          'Managed application state using NGXS and RxJS, and integrated developer tools such as Redux DevTools.',
          'Designed and developed applications using NX Monorepo, which provides a single Git project for all applications.',
          'Developed backend services using Node.js.',
          'Implemented the client-server communication with REST API.',
          'Designed and managed queries for relational databases using PostgreSQL.',
          'Developed internal NPM packages to support workflow automation, integrate with GitLab, and streamline CI/CD processes.',
          'Developed and managed internal packages and dependencies, streamlining workflows and automating repetitive tasks.',
          'Managed source code and collaborated with team members using Git, and GitLab.',
          'Utilized Docker for application containerization and to streamline workflows across different environments.',
          'Implemented unit tests using Jest to ensure code quality and reliability.',
          'Utilized ESLint, Prettier, and Stylelint tools to ensure code consistency, enforce standards, and improve project quality.',
          'Tested and documented REST APIs to ensure correct client-server communication.',
          'Modeled system architectures and documented business processes using Enterprise Architect.',
        ],
      },
    ],
    primaris: [
      {
        title: 'Integration Engineer',
        employmentType: 'Full-time',
        startDate: new Date('2025-06-01'),
        endDate: null,
        locationType: 'Remote',
        description: [
          'Designed, and managed relational databases using Microsoft SQL Server, including writing complex queries and stored procedures.',
          'Developed and maintained data integration pipelines in SnapLogic to automate workflows and enable seamless data exchange between systems.',
        ],
      },
    ],
  },
})
@Injectable()
export class ExperienceState {
  @Selector()
  static getState(state: ExperienceStateModel) {
    return state;
  }
}
