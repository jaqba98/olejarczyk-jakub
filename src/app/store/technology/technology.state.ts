import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

import { TechnologyStateModel } from './technology-state.model';
import { LevelTypeEnum } from '../../enum/type/level-type.enum';

@State<TechnologyStateModel>({
  name: 'technology',
  defaults: {
    markupLanguage: {
      html: {
        label: 'HTML',
        level: LevelTypeEnum.advanced,
        defaultDomain: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
    },
    styleLanguage: {
      css: {
        label: 'CSS',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
      scss: {
        label: 'SCSS',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
    },
    programmingLanguage: {
      javascript: {
        label: 'JavaScript',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'frontend',
        companies: {
          primaris: ['integration'],
          aprSystem: ['frontend', 'backend'],
        },
      },
      typescript: {
        label: 'TypeScript',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'frontend',
        companies: {
          aprSystem: ['frontend', 'backend'],
          primaris: [],
        },
      },
      java: {
        label: 'Java',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'backend',
        companies: {
          aprSystem: [],
          primaris: [],
        },
      },
    },
    framework: {
      angular: {
        label: 'Angular',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
    },
    library: {
      rxjs: {
        label: 'RxJS',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
      ngxs: {
        label: 'NGXS',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
      storybook: {
        label: 'Storybook',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
      primeng: {
        label: 'PrimeNG',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
    },
    test: {
      jest: {
        label: 'Jest',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
      },
    },
    database: {
      postgresql: {
        label: 'PostgreSQL',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'backend',
        companies: {
          aprSystem: ['backend'],
          primaris: [],
        },
      },
      microsoftSqlServer: {
        label: 'Microsoft SQL Server',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'integration',
        companies: {
          aprSystem: [],
          primaris: ['integration'],
        },
      },
    },
    server: {
      nginx: {
        label: 'NGINX',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'devops',
        companies: {
          aprSystem: [],
          primaris: [],
        },
      },
    },
    runtime: {
      nodejs: {
        label: 'Node.js',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'backend',
        companies: {
          aprSystem: ['backend'],
          primaris: [],
        },
      },
    },
    containerization: {
      docker: {
        label: 'Docker',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'devops',
        companies: {
          aprSystem: ['devops'],
          primaris: [],
        },
      },
    },
    integration: {
      snaplogic: {
        label: 'SnapLogic',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'integration',
        companies: {
          aprSystem: [],
          primaris: ['integration'],
        },
      },
    },
    versionControlSystem: {
      git: {
        label: 'Git',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      github: {
        label: 'GitHub',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'common',
        companies: {
          aprSystem: [],
          primaris: ['common'],
        },
      },
      gitlab: {
        label: 'GitLab',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
    },
    packageManager: {
      npm: {
        label: 'npm',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      pnpm: {
        label: 'pnpm',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
    },
    codeQuality: {
      eslint: {
        label: 'Eslint',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      prettier: {
        label: 'Prettier',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      stylelint: {
        label: 'Stylelint',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
    },
    developerTool: {
      postman: {
        label: 'Postman',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: ['common'],
        },
      },
      nx: {
        label: 'Nx',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      enterpriseArchitect: {
        label: 'Enterprise Architect',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      webstorm: {
        label: 'WebStorm',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      visualStudioCode: {
        label: 'Visual Studio Code',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
      },
      eclipse: {
        label: 'Eclipse',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'common',
        companies: {
          aprSystem: [],
          primaris: [],
        },
      },
      jira: {
        label: 'Jira',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'common',
        companies: {
          aprSystem: [],
          primaris: ['common'],
        },
      },
    },
    operatingSystem: {
      windows: {
        label: 'Windows',
        level: LevelTypeEnum.beginner,
        defaultDomain: 'common',
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
