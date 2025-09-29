import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

import { TechnologyStateModel } from './technology-state.model';
import { LevelTypeEnum } from '../../enum/type/level-type.enum';
import { DomainKindEnum } from '../../enum/kind/domain-kind.enum';

@State<TechnologyStateModel>({
  name: 'technology',
  defaults: {
    markupLanguage: {
      html: {
        label: 'HTML',
        level: LevelTypeEnum.advanced,
        defaultDomain: DomainKindEnum.frontend,
        companies: {
          aprSystem: [DomainKindEnum.frontend],
          primaris: [],
        },
      },
    },
    styleLanguage: {
      css: {
        label: 'CSS',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.frontend,
        companies: {
          aprSystem: [DomainKindEnum.frontend],
          primaris: [],
        },
      },
      scss: {
        label: 'SCSS',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.frontend,
        companies: {
          aprSystem: [DomainKindEnum.frontend],
          primaris: [],
        },
      },
    },
    programmingLanguage: {
      javascript: {
        label: 'JavaScript',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.frontend,
        companies: {
          primaris: [DomainKindEnum.integration],
          aprSystem: [DomainKindEnum.frontend, DomainKindEnum.backend],
        },
      },
      typescript: {
        label: 'TypeScript',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.frontend,
        companies: {
          aprSystem: [DomainKindEnum.frontend, DomainKindEnum.backend],
          primaris: [],
        },
      },
      java: {
        label: 'Java',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.backend,
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
        defaultDomain: DomainKindEnum.frontend,
        companies: {
          aprSystem: [DomainKindEnum.frontend],
          primaris: [],
        },
      },
    },
    library: {
      rxjs: {
        label: 'RxJS',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.frontend,
        companies: {
          aprSystem: [DomainKindEnum.frontend],
          primaris: [],
        },
      },
      ngxs: {
        label: 'NGXS',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.frontend,
        companies: {
          aprSystem: [DomainKindEnum.frontend],
          primaris: [],
        },
      },
      storybook: {
        label: 'Storybook',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.frontend,
        companies: {
          aprSystem: [DomainKindEnum.frontend],
          primaris: [],
        },
      },
      primeng: {
        label: 'PrimeNG',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.frontend,
        companies: {
          aprSystem: [DomainKindEnum.frontend],
          primaris: [],
        },
      },
    },
    test: {
      jest: {
        label: 'Jest',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.frontend,
        companies: {
          aprSystem: [DomainKindEnum.frontend],
          primaris: [],
        },
      },
    },
    database: {
      postgresql: {
        label: 'PostgreSQL',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.backend,
        companies: {
          aprSystem: [DomainKindEnum.backend],
          primaris: [],
        },
      },
      microsoftSqlServer: {
        label: 'Microsoft SQL Server',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.integration,
        companies: {
          aprSystem: [],
          primaris: [DomainKindEnum.integration],
        },
      },
    },
    server: {
      nginx: {
        label: 'NGINX',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.devops,
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
        defaultDomain: DomainKindEnum.backend,
        companies: {
          aprSystem: [DomainKindEnum.backend],
          primaris: [],
        },
      },
    },
    containerization: {
      docker: {
        label: 'Docker',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.devops,
        companies: {
          aprSystem: [DomainKindEnum.devops],
          primaris: [],
        },
      },
    },
    integration: {
      snaplogic: {
        label: 'SnapLogic',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.integration,
        companies: {
          aprSystem: [],
          primaris: [DomainKindEnum.integration],
        },
      },
    },
    versionControlSystem: {
      git: {
        label: 'Git',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.common,
        companies: {
          aprSystem: [DomainKindEnum.common],
          primaris: [],
        },
      },
      github: {
        label: 'GitHub',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.common,
        companies: {
          aprSystem: [],
          primaris: [DomainKindEnum.common],
        },
      },
      gitlab: {
        label: 'GitLab',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.common,
        companies: {
          aprSystem: [DomainKindEnum.common],
          primaris: [],
        },
      },
    },
    packageManager: {
      npm: {
        label: 'npm',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.common,
        companies: {
          aprSystem: [DomainKindEnum.common],
          primaris: [],
        },
      },
      pnpm: {
        label: 'pnpm',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.common,
        companies: {
          aprSystem: [DomainKindEnum.common],
          primaris: [],
        },
      },
    },
    codeQuality: {
      eslint: {
        label: 'Eslint',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.common,
        companies: {
          aprSystem: [DomainKindEnum.common],
          primaris: [],
        },
      },
      prettier: {
        label: 'Prettier',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.common,
        companies: {
          aprSystem: [DomainKindEnum.common],
          primaris: [],
        },
      },
      stylelint: {
        label: 'Stylelint',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.common,
        companies: {
          aprSystem: [DomainKindEnum.common],
          primaris: [],
        },
      },
    },
    developerTool: {
      postman: {
        label: 'Postman',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.common,
        companies: {
          aprSystem: [DomainKindEnum.common],
          primaris: [DomainKindEnum.common],
        },
      },
      nx: {
        label: 'Nx',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.common,
        companies: {
          aprSystem: [DomainKindEnum.common],
          primaris: [],
        },
      },
      enterpriseArchitect: {
        label: 'Enterprise Architect',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.common,
        companies: {
          aprSystem: [DomainKindEnum.common],
          primaris: [],
        },
      },
      webstorm: {
        label: 'WebStorm',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.common,
        companies: {
          aprSystem: [DomainKindEnum.common],
          primaris: [],
        },
      },
      visualStudioCode: {
        label: 'Visual Studio Code',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.common,
        companies: {
          aprSystem: [DomainKindEnum.common],
          primaris: [],
        },
      },
      eclipse: {
        label: 'Eclipse',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.common,
        companies: {
          aprSystem: [],
          primaris: [],
        },
      },
      jira: {
        label: 'Jira',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.common,
        companies: {
          aprSystem: [],
          primaris: [DomainKindEnum.common],
        },
      },
    },
    operatingSystem: {
      windows: {
        label: 'Windows',
        level: LevelTypeEnum.beginner,
        defaultDomain: DomainKindEnum.common,
        companies: {
          primaris: [DomainKindEnum.common],
          aprSystem: [DomainKindEnum.common],
        },
      },
    },
  },
})
@Injectable()
export class TechnologyState {}
