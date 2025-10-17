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
      description: [
        'Designed, and managed relational databases using Microsoft SQL Server, including writing complex queries and stored procedures.',
        'Developed and maintained data integration pipelines in SnapLogic to automate workflows and enable seamless data exchange between systems.',
      ],
      technologies: [
        { technology: 'javascript', group: ['integration'] },
        { technology: 'microsoftSqlServer', group: ['integration'] },
        { technology: 'snaplogic', group: ['integration'] },
        { technology: 'github', group: ['common'] },
        { technology: 'postman', group: ['common'] },
        { technology: 'jira', group: ['common'] },
        { technology: 'windows', group: ['common'] },
      ],
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
      technologies: [
        { technology: 'html', group: ['frontend'] },
        { technology: 'css', group: ['frontend'] },
        { technology: 'sass', group: ['frontend'] },
        { technology: 'javascript', group: ['frontend', 'backend'] },
        { technology: 'typescript', group: ['frontend', 'backend'] },
        { technology: 'angular', group: ['frontend'] },
        { technology: 'rxjs', group: ['frontend'] },
        { technology: 'storybook', group: ['frontend'] },
        { technology: 'primeng', group: ['frontend'] },
        { technology: 'jest', group: ['frontend'] },
        { technology: 'postgresql', group: ['backend'] },
        { technology: 'nodejs', group: ['backend'] },
        { technology: 'docker', group: ['devops'] },
        { technology: 'git', group: ['common'] },
        { technology: 'gitlab', group: ['common'] },
        { technology: 'npm', group: ['common'] },
        { technology: 'pnpm', group: ['common'] },
        { technology: 'eslint', group: ['common'] },
        { technology: 'prettier', group: ['common'] },
        { technology: 'stylelint', group: ['common'] },
        { technology: 'postman', group: ['common'] },
        { technology: 'nx', group: ['common'] },
        { technology: 'webstorm', group: ['common'] },
        { technology: 'visualStudioCode', group: ['common'] },
        { technology: 'windows', group: ['common'] },
      ],
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
