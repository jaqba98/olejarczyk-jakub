import { Selector, State } from '@ngxs/store';
import { TechnologyStateModel } from './technology-state.model';
import { SvgConst } from '../../const/svg.const';
import { Injectable } from '@angular/core';

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
        svg: SvgConst.html,
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
        svg: SvgConst.html,
      },
      sass: {
        name: 'Sass',
        level: 'beginner',
        defaultGroup: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
        svg: SvgConst.html,
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
        svg: SvgConst.html,
      },
      typescript: {
        name: 'TypeScript',
        level: 'beginner',
        defaultGroup: 'frontend',
        companies: {
          aprSystem: ['frontend', 'backend'],
          primaris: [],
        },
        svg: SvgConst.html,
      },
      java: {
        name: 'Java',
        level: 'beginner',
        defaultGroup: 'backend',
        companies: {
          aprSystem: [],
          primaris: [],
        },
        svg: SvgConst.html,
      },
      python: {
        name: 'Python',
        level: 'beginner',
        defaultGroup: 'ai',
        companies: {
          aprSystem: [],
          primaris: [],
        },
        svg: SvgConst.html,
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
        svg: SvgConst.html,
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
        svg: SvgConst.html,
      },
      ngxs: {
        name: 'NGXS',
        level: 'beginner',
        defaultGroup: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
        svg: SvgConst.html,
      },
      storybook: {
        name: 'Storybook',
        level: 'beginner',
        defaultGroup: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
        svg: SvgConst.html,
      },
      primeng: {
        name: 'PrimeNG',
        level: 'beginner',
        defaultGroup: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
        svg: SvgConst.html,
      },
      numpy: {
        name: 'NumPy',
        level: 'beginner',
        defaultGroup: 'ai',
        companies: {
          aprSystem: [],
          primaris: [],
        },
        svg: SvgConst.html,
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
        svg: SvgConst.html,
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
        svg: SvgConst.html,
      },
      microsoftSqlServer: {
        name: 'Microsoft SQL Server',
        level: 'beginner',
        defaultGroup: 'integration',
        companies: {
          aprSystem: [],
          primaris: ['integration'],
        },
        svg: SvgConst.html,
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
        svg: SvgConst.html,
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
        svg: SvgConst.html,
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
        svg: SvgConst.html,
      },
    },
    integrationPlatform: {
      snaplogic: {
        name: 'SnapLogic',
        level: 'beginner',
        defaultGroup: 'integration',
        companies: {
          aprSystem: [],
          primaris: ['integration'],
        },
        svg: SvgConst.html,
      },
      n8n: {
        name: 'N8N',
        level: 'beginner',
        defaultGroup: 'integration',
        companies: {
          aprSystem: [],
          primaris: [],
        },
        svg: SvgConst.html,
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
        svg: SvgConst.html,
      },
      github: {
        name: 'GitHub',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: [],
          primaris: ['common'],
        },
        svg: SvgConst.html,
      },
      gitlab: {
        name: 'GitLab',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
        svg: SvgConst.html,
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
        svg: SvgConst.html,
      },
      pnpm: {
        name: 'pnpm',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
        svg: SvgConst.html,
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
        svg: SvgConst.html,
      },
      prettier: {
        name: 'Prettier',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
        svg: SvgConst.html,
      },
      stylelint: {
        name: 'Stylelint',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
        svg: SvgConst.html,
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
        svg: SvgConst.html,
      },
      nx: {
        name: 'Nx',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
        svg: SvgConst.html,
      },
      visualParadigm: {
        name: 'Visual Paradigm',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
        svg: SvgConst.html,
      },
      webstorm: {
        name: 'WebStorm',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
        svg: SvgConst.html,
      },
      visualStudioCode: {
        name: 'Visual Studio Code',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
        svg: SvgConst.html,
      },
      eclipse: {
        name: 'Eclipse',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: [],
          primaris: [],
        },
        svg: SvgConst.html,
      },
      jira: {
        name: 'Jira',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: [],
          primaris: ['common'],
        },
        svg: SvgConst.html,
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
        svg: SvgConst.html,
      },
      linux: {
        name: 'Linux',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          primaris: [],
          aprSystem: [],
        },
        svg: SvgConst.html,
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
