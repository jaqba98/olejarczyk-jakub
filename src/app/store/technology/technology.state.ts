import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyStateModel } from './technology-state.model';

@State<TechnologyStateModel>({
  name: 'technology',
  defaults: {
    markupLanguage: {
      html: {
        name: 'HTML',
        level: 'beginner',
        defaultGroup: 'frontend',
        className: 'devicon-html5-plain',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
    },
    stylesheetLanguage: {
      css: {
        name: 'CSS',
        level: 'beginner',
        defaultGroup: 'frontend',
        className: 'devicon-css3-plain',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
      sass: {
        name: 'Sass',
        level: 'beginner',
        defaultGroup: 'frontend',
        className: 'devicon-sass-plain',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
    },
    programmingLanguage: {
      javascript: {
        name: 'JavaScript',
        level: 'beginner',
        defaultGroup: 'frontend',
        className: 'devicon-javascript-plain',
        companies: {
          aprSystem: ['frontend', 'backend'],
          primaris: ['integration'],
        },
      },
      typescript: {
        name: 'TypeScript',
        level: 'beginner',
        defaultGroup: 'frontend',
        className: 'devicon-typescript-plain',
        companies: {
          aprSystem: ['frontend', 'backend'],
          primaris: [],
        },
      },
      java: {
        name: 'Java',
        level: 'beginner',
        defaultGroup: 'backend',
        className: 'devicon-java-plain',
        companies: {
          aprSystem: [],
          primaris: [],
        },
      },
      python: {
        name: 'Python',
        level: 'beginner',
        defaultGroup: 'ai',
        className: 'devicon-python-plain',
        companies: {
          aprSystem: [],
          primaris: [],
        },
      },
    },
    framework: {
      angular: {
        name: 'Angular',
        level: 'beginner',
        defaultGroup: 'frontend',
        className: 'devicon-angularjs-plain',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
    },
    library: {
      rxjs: {
        name: 'RxJS',
        level: 'beginner',
        defaultGroup: 'frontend',
        className: 'devicon-devicon-plain',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
      ngxs: {
        name: 'NGXS',
        level: 'beginner',
        defaultGroup: 'frontend',
        className: 'devicon-devicon-plain',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
      storybook: {
        name: 'Storybook',
        level: 'beginner',
        defaultGroup: 'frontend',
        className: 'devicon-storybook-plain',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
      primeng: {
        name: 'PrimeNG',
        level: 'beginner',
        defaultGroup: 'frontend',
        className: 'devicon-devicon-plain',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
    },
    test: {
      jest: {
        name: 'Jest',
        level: 'beginner',
        defaultGroup: 'frontend',
        className: 'devicon-jest-plain',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
    },
    database: {
      postgresql: {
        name: 'PostgreSQL',
        level: 'beginner',
        defaultGroup: 'backend',
        className: 'devicon-postgresql-plain',
        companies: {
          aprSystem: ['backend'],
          primaris: [],
        },
      },
      microsoftSqlServer: {
        name: 'Microsoft SQL Server',
        level: 'beginner',
        defaultGroup: 'integration',
        className: 'devicon-microsoftsqlserver-plain',
        companies: {
          aprSystem: [],
          primaris: ['integration'],
        },
      },
    },
    server: {
      nginx: {
        name: 'NGINX',
        level: 'beginner',
        defaultGroup: 'devops',
        className: 'devicon-nginx-original',
        companies: {
          aprSystem: [],
          primaris: [],
        },
      },
    },
    runtime: {
      nodejs: {
        name: 'Node.js',
        level: 'beginner',
        defaultGroup: 'backend',
        className: 'devicon-nodejs-plain',
        companies: {
          aprSystem: ['backend'],
          primaris: [],
        },
      },
    },
    containerization: {
      docker: {
        name: 'Docker',
        level: 'beginner',
        defaultGroup: 'devops',
        className: 'devicon-docker-plain',
        companies: {
          aprSystem: ['devops'],
          primaris: [],
        },
      },
    },
    integration: {
      snaplogic: {
        name: 'SnapLogic',
        level: 'beginner',
        defaultGroup: 'integration',
        className: 'devicon-devicon-plain',
        companies: {
          aprSystem: [],
          primaris: ['integration'],
        },
      },
    },
    versionControlSystem: {
      git: {
        name: 'Git',
        level: 'beginner',
        defaultGroup: 'common',
        className: 'devicon-git-plain',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      github: {
        name: 'GitHub',
        level: 'beginner',
        defaultGroup: 'common',
        className: 'devicon-github-original',
        companies: {
          aprSystem: [],
          primaris: ['common'],
        },
      },
      gitlab: {
        name: 'GitLab',
        level: 'beginner',
        defaultGroup: 'common',
        className: 'devicon-gitlab-plain',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
    },
    packageManager: {
      npm: {
        name: 'npm',
        level: 'beginner',
        defaultGroup: 'common',
        className: 'devicon-npm-original-wordmark',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      pnpm: {
        name: 'pnpm',
        level: 'beginner',
        defaultGroup: 'common',
        className: 'devicon-devicon-plain',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
    },
    codeQuality: {
      eslint: {
        name: 'Eslint',
        level: 'beginner',
        defaultGroup: 'common',
        className: 'devicon-eslint-plain',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      prettier: {
        name: 'Prettier',
        level: 'beginner',
        defaultGroup: 'common',
        className: 'devicon-devicon-plain',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      stylelint: {
        name: 'Stylelint',
        level: 'beginner',
        defaultGroup: 'common',
        className: 'devicon-devicon-plain',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
    },
    developerTool: {
      postman: {
        name: 'Postman',
        level: 'beginner',
        defaultGroup: 'common',
        className: 'devicon-devicon-plain',
        companies: {
          aprSystem: ['common'],
          primaris: ['common'],
        },
      },
      nx: {
        name: 'Nx',
        level: 'beginner',
        defaultGroup: 'common',
        className: 'devicon-devicon-plain',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      enterpriseArchitect: {
        name: 'Enterprise Architect',
        level: 'beginner',
        defaultGroup: 'common',
        className: 'devicon-devicon-plain',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      webstorm: {
        name: 'WebStorm',
        level: 'beginner',
        defaultGroup: 'common',
        className: 'devicon-webstorm-plain',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      visualStudioCode: {
        name: 'Visual Studio Code',
        level: 'beginner',
        defaultGroup: 'common',
        className: 'devicon-vscode-plain',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      eclipse: {
        name: 'Eclipse',
        level: 'beginner',
        defaultGroup: 'common',
        className: 'devicon-devicon-plain',
        companies: {
          aprSystem: [],
          primaris: [],
        },
      },
      jira: {
        name: 'Jira',
        level: 'beginner',
        defaultGroup: 'common',
        className: 'devicon-jira-plain',
        companies: {
          aprSystem: [],
          primaris: ['common'],
        },
      },
    },
    operatingSystem: {
      windows: {
        name: 'Windows',
        level: 'beginner',
        defaultGroup: 'common',
        className: 'devicon-windows8-original',
        companies: {
          primaris: ['common'],
          aprSystem: ['common'],
        },
      },
      linux: {
        name: 'Linux',
        level: 'beginner',
        defaultGroup: 'common',
        className: 'devicon-linux-plain',
        companies: {
          primaris: [],
          aprSystem: [],
        },
      },
    },
  },
})
@Injectable()
export class TechnologyState {
  @Selector()
  static getState(state: TechnologyStateModel) {
    return state;
  }
}
