import { State } from '@ngxs/store';

import { TechnologyStateModel } from './technology.state.model';
import { Injectable } from '@angular/core';

@State<TechnologyStateModel>({
  name: 'technology',
  defaults: {
    markupLanguage: {
      html: {
        label: 'HTML',
        level: 'advanced',
        defaultGroup: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
    },
    stylesheetLanguage: {
      css: {
        label: 'CSS',
        level: 'beginner',
        defaultGroup: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
      scss: {
        label: 'SCSS',
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
        label: 'JavaScript',
        level: 'beginner',
        defaultGroup: 'frontend',
        companies: {
          aprSystem: ['frontend', 'backend'],
          primaris: ['integration'],
        },
      },
      typescript: {
        label: 'TypeScript',
        level: 'beginner',
        defaultGroup: 'frontend',
        companies: {
          aprSystem: ['frontend', 'backend'],
          primaris: [],
        },
      },
      java: {
        label: 'Java',
        level: 'beginner',
        defaultGroup: 'backend',
        companies: {
          aprSystem: [],
          primaris: [],
        },
      },
    },
    framework: {
      angular: {
        label: 'Angular',
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
        label: 'RxJS',
        level: 'beginner',
        defaultGroup: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
      ngxs: {
        label: 'NGXS',
        level: 'intermediate',
        defaultGroup: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
      storybook: {
        label: 'Storybook',
        level: 'intermediate',
        defaultGroup: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
      primeng: {
        label: 'PrimeNG',
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
        label: 'Jest',
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
        label: 'PostgreSQL',
        level: 'beginner',
        defaultGroup: 'backend',
        companies: {
          aprSystem: ['backend'],
          primaris: [],
        },
      },
      microsoftSqlServer: {
        label: 'Microsoft SQL Server',
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
        label: 'NGINX',
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
        label: 'Node.js',
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
        label: 'Docker',
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
        label: 'SnapLogic',
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
        label: 'Git',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      github: {
        label: 'GitHub',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: [],
          primaris: ['common'],
        },
      },
      gitlab: {
        label: 'GitLab',
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
        label: 'npm',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      pnpm: {
        label: 'pnpm',
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
        label: 'Eslint',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      prettier: {
        label: 'Prettier',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      stylelint: {
        label: 'Stylelint',
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
        label: 'Postman',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: ['common'],
        },
      },
      nx: {
        label: 'Nx',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      enterpriseArchitect: {
        label: 'Enterprise Architect',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      webstorm: {
        label: 'WebStorm',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      visualStudioCode: {
        label: 'Visual Studio Code',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      eclipse: {
        label: 'Eclipse',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: [],
          primaris: [],
        },
      },
      jira: {
        label: 'Jira',
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
        label: 'Windows',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          primaris: ['common'],
          aprSystem: ['common'],
        },
      },
    },
  },
})
@Injectable()
export class TechnologyState {}
