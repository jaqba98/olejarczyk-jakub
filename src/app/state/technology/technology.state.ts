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
        svg: SvgConst.css,
      },
      sass: {
        name: 'Sass',
        level: 'beginner',
        defaultGroup: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
        svg: SvgConst.sass,
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
        svg: SvgConst.javascript,
      },
      typescript: {
        name: 'TypeScript',
        level: 'beginner',
        defaultGroup: 'frontend',
        companies: {
          aprSystem: ['frontend', 'backend'],
          primaris: [],
        },
        svg: SvgConst.typescript,
      },
      python: {
        name: 'Python',
        level: 'beginner',
        defaultGroup: 'ai',
        companies: {
          aprSystem: [],
          primaris: [],
        },
        svg: SvgConst.python,
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
        svg: SvgConst.angular,
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
        svg: SvgConst.rxjs,
      },
      storybook: {
        name: 'Storybook',
        level: 'beginner',
        defaultGroup: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
        svg: SvgConst.storybook,
      },
      primeng: {
        name: 'PrimeNG',
        level: 'beginner',
        defaultGroup: 'frontend',
        companies: {
          aprSystem: ['frontend'],
          primaris: [],
        },
        svg: SvgConst.primeng,
      },
      numpy: {
        name: 'NumPy',
        level: 'beginner',
        defaultGroup: 'ai',
        companies: {
          aprSystem: [],
          primaris: [],
        },
        svg: SvgConst.numpy,
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
        svg: SvgConst.jest,
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
        svg: SvgConst.postgresql,
      },
      microsoftSqlServer: {
        name: 'Microsoft SQL Server',
        level: 'beginner',
        defaultGroup: 'integration',
        companies: {
          aprSystem: [],
          primaris: ['integration'],
        },
        svg: SvgConst.microsoftSqlServer,
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
        svg: SvgConst.nginx,
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
        svg: SvgConst.nodejs,
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
        svg: SvgConst.docker,
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
        svg: SvgConst.snaplogic,
      },
      n8n: {
        name: 'N8N',
        level: 'beginner',
        defaultGroup: 'integration',
        companies: {
          aprSystem: [],
          primaris: [],
        },
        svg: SvgConst.n8n,
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
        svg: SvgConst.git,
      },
      github: {
        name: 'GitHub',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: [],
          primaris: ['common'],
        },
        svg: SvgConst.github,
      },
      gitlab: {
        name: 'GitLab',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
        svg: SvgConst.gitlab,
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
        svg: SvgConst.npm,
      },
      pnpm: {
        name: 'pnpm',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
        svg: SvgConst.pnpm,
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
        svg: SvgConst.eslint,
      },
      prettier: {
        name: 'Prettier',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
        svg: SvgConst.prettier,
      },
      stylelint: {
        name: 'Stylelint',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
        svg: SvgConst.stylelint,
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
        svg: SvgConst.postman,
      },
      nx: {
        name: 'Nx',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
        svg: SvgConst.nx,
      },
      visualParadigm: {
        name: 'Visual Paradigm',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
        svg: SvgConst.visualParadigm,
      },
      webstorm: {
        name: 'WebStorm',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
        svg: SvgConst.webstorm,
      },
      visualStudioCode: {
        name: 'Visual Studio Code',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: ['common'],
          primaris: [],
        },
        svg: SvgConst.visualStudioCode,
      },
      eclipse: {
        name: 'Eclipse',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: [],
          primaris: [],
        },
        svg: SvgConst.eclipse,
      },
      jira: {
        name: 'Jira',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          aprSystem: [],
          primaris: ['common'],
        },
        svg: SvgConst.jira,
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
        svg: SvgConst.window,
      },
      linux: {
        name: 'Linux',
        level: 'beginner',
        defaultGroup: 'common',
        companies: {
          primaris: [],
          aprSystem: [],
        },
        svg: SvgConst.linux,
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
