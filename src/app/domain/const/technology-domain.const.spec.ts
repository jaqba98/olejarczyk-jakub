import { SvgConst } from '../../const/svg.const';
import { BaseDomain } from '../model/base-domain.model';
import { TechnologyDomain } from '../model/technology-domain.model';
import { TechnologyKindDomainType } from '../type/kind/technology-kind-domain.type';
import { technologyDomainConst } from './technology-domain.const';

describe('Technology Domain Const', () => {
  it('Should return the correct data', () => {
    const correctData: BaseDomain.Type<
      TechnologyKindDomainType,
      TechnologyDomain.Data,
      TechnologyDomain.Metadata
    > = {
      html: {
        data: {
          name: 'HTML',
          level: 'beginner',
          svg: SvgConst.html,
        },
        metadata: {
          kind: 'html',
          categoryKind: 'markupLanguage',
          order: 0,
        },
      },
      css: {
        data: {
          name: 'CSS',
          level: 'beginner',
          svg: SvgConst.css,
        },
        metadata: {
          kind: 'css',
          categoryKind: 'stylesheetLanguage',
          order: 1,
        },
      },
      sass: {
        data: {
          name: 'Sass',
          level: 'beginner',
          svg: SvgConst.sass,
        },
        metadata: {
          kind: 'sass',
          categoryKind: 'stylesheetLanguage',
          order: 2,
        },
      },
      javascript: {
        data: {
          name: 'JavaScript',
          level: 'beginner',
          svg: SvgConst.javascript,
        },
        metadata: {
          kind: 'javascript',
          categoryKind: 'programmingLanguage',
          order: 3,
        },
      },
      typescript: {
        data: {
          name: 'TypeScript',
          level: 'beginner',
          svg: SvgConst.typescript,
        },
        metadata: {
          kind: 'typescript',
          categoryKind: 'programmingLanguage',
          order: 4,
        },
      },
      python: {
        data: {
          name: 'Python',
          level: 'beginner',
          svg: SvgConst.python,
        },
        metadata: {
          kind: 'python',
          categoryKind: 'programmingLanguage',
          order: 5,
        },
      },
      angular: {
        data: {
          name: 'Angular',
          level: 'beginner',
          svg: SvgConst.angular,
        },
        metadata: {
          kind: 'angular',
          categoryKind: 'framework',
          order: 6,
        },
      },
      rxjs: {
        data: {
          name: 'RxJS',
          level: 'beginner',
          svg: SvgConst.rxjs,
        },
        metadata: {
          kind: 'rxjs',
          categoryKind: 'library',
          order: 7,
        },
      },
      storybook: {
        data: {
          name: 'Storybook',
          level: 'beginner',
          svg: SvgConst.storybook,
        },
        metadata: {
          kind: 'storybook',
          categoryKind: 'library',
          order: 8,
        },
      },
      primeng: {
        data: {
          name: 'PrimeNG',
          level: 'beginner',
          svg: SvgConst.primeng,
        },
        metadata: {
          kind: 'primeng',
          categoryKind: 'library',
          order: 9,
        },
      },
      numpy: {
        data: {
          name: 'NumPy',
          level: 'beginner',
          svg: SvgConst.numpy,
        },
        metadata: {
          kind: 'numpy',
          categoryKind: 'library',
          order: 10,
        },
      },
      jest: {
        data: {
          name: 'Jest',
          level: 'beginner',
          svg: SvgConst.jest,
        },
        metadata: {
          kind: 'jest',
          categoryKind: 'test',
          order: 11,
        },
      },
      eslint: {
        data: {
          name: 'Eslint',
          level: 'beginner',
          svg: SvgConst.eslint,
        },
        metadata: {
          kind: 'eslint',
          categoryKind: 'codeQuality',
          order: 12,
        },
      },
      prettier: {
        data: {
          name: 'Prettier',
          level: 'beginner',
          svg: SvgConst.prettier,
        },
        metadata: {
          kind: 'prettier',
          categoryKind: 'codeQuality',
          order: 13,
        },
      },
      stylelint: {
        data: {
          name: 'Stylelint',
          level: 'beginner',
          svg: SvgConst.stylelint,
        },
        metadata: {
          kind: 'stylelint',
          categoryKind: 'codeQuality',
          order: 14,
        },
      },
      postgresql: {
        data: {
          name: 'PostgreSQL',
          level: 'beginner',
          svg: SvgConst.postgresql,
        },
        metadata: {
          kind: 'postgresql',
          categoryKind: 'database',
          order: 15,
        },
      },
      microsoftSqlServer: {
        data: {
          name: 'Microsoft SQL Server',
          level: 'beginner',
          svg: SvgConst.microsoftSqlServer,
        },
        metadata: {
          kind: 'microsoftSqlServer',
          categoryKind: 'database',
          order: 16,
        },
      },
      nginx: {
        data: {
          name: 'NGINX',
          level: 'beginner',
          svg: SvgConst.nginx,
        },
        metadata: {
          kind: 'nginx',
          categoryKind: 'server',
          order: 17,
        },
      },
      nodejs: {
        data: {
          name: 'Node.js',
          level: 'beginner',
          svg: SvgConst.nodejs,
        },
        metadata: {
          kind: 'nodejs',
          categoryKind: 'runtime',
          order: 18,
        },
      },
      docker: {
        data: {
          name: 'Docker',
          level: 'beginner',
          svg: SvgConst.docker,
        },
        metadata: {
          kind: 'docker',
          categoryKind: 'containerization',
          order: 19,
        },
      },
      snaplogic: {
        data: {
          name: 'SnapLogic',
          level: 'beginner',
          svg: SvgConst.snaplogic,
        },
        metadata: {
          kind: 'snaplogic',
          categoryKind: 'integrationPlatform',
          order: 20,
        },
      },
      n8n: {
        data: {
          name: 'n8n',
          level: 'beginner',
          svg: SvgConst.n8n,
        },
        metadata: {
          kind: 'n8n',
          categoryKind: 'integrationPlatform',
          order: 21,
        },
      },
      postman: {
        data: {
          name: 'Postman',
          level: 'beginner',
          svg: SvgConst.postman,
        },
        metadata: {
          kind: 'postman',
          categoryKind: 'api',
          order: 22,
        },
      },
      git: {
        data: {
          name: 'Git',
          level: 'beginner',
          svg: SvgConst.git,
        },
        metadata: {
          kind: 'git',
          categoryKind: 'versionControlSystem',
          order: 23,
        },
      },
      github: {
        data: {
          name: 'GitHub',
          level: 'beginner',
          svg: SvgConst.github,
        },
        metadata: {
          kind: 'github',
          categoryKind: 'versionControlSystem',
          order: 24,
        },
      },
      gitlab: {
        data: {
          name: 'GitLab',
          level: 'beginner',
          svg: SvgConst.gitlab,
        },
        metadata: {
          kind: 'gitlab',
          categoryKind: 'versionControlSystem',
          order: 25,
        },
      },
      npm: {
        data: {
          name: 'npm',
          level: 'beginner',
          svg: SvgConst.npm,
        },
        metadata: {
          kind: 'npm',
          categoryKind: 'packageManager',
          order: 26,
        },
      },
      pnpm: {
        data: {
          name: 'pnpm',
          level: 'beginner',
          svg: SvgConst.pnpm,
        },
        metadata: {
          kind: 'pnpm',
          categoryKind: 'packageManager',
          order: 27,
        },
      },
      nx: {
        data: {
          name: 'Nx',
          level: 'beginner',
          svg: SvgConst.nx,
        },
        metadata: {
          kind: 'nx',
          categoryKind: 'monorepo',
          order: 28,
        },
      },
      webstorm: {
        data: {
          name: 'WebStorm',
          level: 'beginner',
          svg: SvgConst.webstorm,
        },
        metadata: {
          kind: 'webstorm',
          categoryKind: 'ide',
          order: 29,
        },
      },
      eclipse: {
        data: {
          name: 'Eclipse',
          level: 'beginner',
          svg: SvgConst.eclipse,
        },
        metadata: {
          kind: 'eclipse',
          categoryKind: 'ide',
          order: 30,
        },
      },
      visualStudioCode: {
        data: {
          name: 'Visual Studio Code',
          level: 'beginner',
          svg: SvgConst.visualStudioCode,
        },
        metadata: {
          kind: 'visualStudioCode',
          categoryKind: 'editor',
          order: 31,
        },
      },
      visualParadigm: {
        data: {
          name: 'Visual Paradigm',
          level: 'beginner',
          svg: SvgConst.visualParadigm,
        },
        metadata: {
          kind: 'visualParadigm',
          categoryKind: 'diagram',
          order: 32,
        },
      },
      jira: {
        data: {
          name: 'Jira',
          level: 'beginner',
          svg: SvgConst.jira,
        },
        metadata: {
          kind: 'jira',
          categoryKind: 'projectManagement',
          order: 33,
        },
      },
      windows: {
        data: {
          name: 'Windows',
          level: 'beginner',
          svg: SvgConst.windows,
        },
        metadata: {
          kind: 'windows',
          categoryKind: 'operatingSystem',
          order: 34,
        },
      },
      linux: {
        data: {
          name: 'Linux',
          level: 'beginner',
          svg: SvgConst.linux,
        },
        metadata: {
          kind: 'linux',
          categoryKind: 'operatingSystem',
          order: 35,
        },
      },
    };
    expect(technologyDomainConst).toEqual(correctData);
  });
});
