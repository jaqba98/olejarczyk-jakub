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
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
      scss: {
        name: 'SCSS',
        level: 'beginner',
        defaultGroup: 'frontend',
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
        companies: {
          aprSystem: ['frontend', 'backend'],
          primaris: ['integration'],
        },
      },
      typescript: {
        name: 'TypeScript',
        level: 'beginner',
        defaultGroup: 'frontend',
        companies: {
          aprSystem: ['frontend', 'backend'],
          primaris: [],
        },
      },
      java: {
        name: 'Java',
        level: 'beginner',
        defaultGroup: 'backend',
        companies: {
          aprSystem: [],
          primaris: [],
        },
      },
      python: {
        name: 'Python',
        level: 'beginner',
        defaultGroup: 'ai',
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
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
      ngxs: {
        name: 'NGXS',
        level: 'beginner',
        defaultGroup: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
      storybook: {
        name: 'Storybook',
        level: 'beginner',
        defaultGroup: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
      primeng: {
        name: 'PrimeNG',
        level: 'beginner',
        defaultGroup: 'frontend',
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
        companies: {
          aprSystem: ['backend'],
          primaris: [],
        },
      },
      microsoftSqlServer: {
        name: 'Microsoft SQL Server',
        level: 'beginner',
        defaultGroup: 'integration',
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
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      github: {
        name: 'GitHub',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: [],
          primaris: ['common'],
        },
      },
      gitlab: {
        name: 'GitLab',
        level: 'beginner',
        defaultGroup: 'common',
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
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      pnpm: {
        name: 'pnpm',
        level: 'beginner',
        defaultGroup: 'common',
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
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      prettier: {
        name: 'Prettier',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      stylelint: {
        name: 'Stylelint',
        level: 'beginner',
        defaultGroup: 'common',
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
        companies: {
          aprSystem: ['common'],
          primaris: ['common'],
        },
      },
      nx: {
        name: 'Nx',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      enterpriseArchitect: {
        name: 'Enterprise Architect',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      webstorm: {
        name: 'WebStorm',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      visualStudioCode: {
        name: 'Visual Studio Code',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      eclipse: {
        name: 'Eclipse',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: [],
          primaris: [],
        },
      },
      jira: {
        name: 'Jira',
        level: 'beginner',
        defaultGroup: 'common',
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
        companies: {
          primaris: ['common'],
          aprSystem: ['common'],
        },
      },
      linux: {
        name: 'Linux',
        level: 'beginner',
        defaultGroup: 'common',
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
