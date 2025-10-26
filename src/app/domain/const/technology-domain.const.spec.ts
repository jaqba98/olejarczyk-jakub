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
          kind: 'html',
          name: 'HTML',
          level: 'beginner',
          svg: SvgConst.html,
        },
        metadata: {
          order: 0,
        },
      },
      css: {
        data: {
          kind: 'css',
          name: 'CSS',
          level: 'beginner',
          svg: SvgConst.css,
        },
        metadata: {
          order: 1,
        },
      },
      sass: {
        data: {
          kind: 'sass',
          name: 'Sass',
          level: 'beginner',
          svg: SvgConst.sass,
        },
        metadata: {
          order: 2,
        },
      },
      javascript: {
        data: {
          kind: 'javascript',
          name: 'JavaScript',
          level: 'beginner',
          svg: SvgConst.javascript,
        },
        metadata: {
          order: 3,
        },
      },
      typescript: {
        data: {
          kind: 'typescript',
          name: 'TypeScript',
          level: 'beginner',
          svg: SvgConst.typescript,
        },
        metadata: {
          order: 4,
        },
      },
      python: {
        data: {
          kind: 'python',
          name: 'Python',
          level: 'beginner',
          svg: SvgConst.python,
        },
        metadata: {
          order: 5,
        },
      },
      angular: {
        data: {
          kind: 'angular',
          name: 'Angular',
          level: 'beginner',
          svg: SvgConst.angular,
        },
        metadata: {
          order: 6,
        },
      },
      rxjs: {
        data: {
          kind: 'rxjs',
          name: 'RxJS',
          level: 'beginner',
          svg: SvgConst.rxjs,
        },
        metadata: {
          order: 7,
        },
      },
      storybook: {
        data: {
          kind: 'storybook',
          name: 'Storybook',
          level: 'beginner',
          svg: SvgConst.storybook,
        },
        metadata: {
          order: 8,
        },
      },
      primeng: {
        data: {
          kind: 'primeng',
          name: 'PrimeNG',
          level: 'beginner',
          svg: SvgConst.primeng,
        },
        metadata: {
          order: 9,
        },
      },
      numpy: {
        data: {
          kind: 'numpy',
          name: 'NumPy',
          level: 'beginner',
          svg: SvgConst.numpy,
        },
        metadata: {
          order: 10,
        },
      },
      jest: {
        data: {
          kind: 'jest',
          name: 'Jest',
          level: 'beginner',
          svg: SvgConst.jest,
        },
        metadata: {
          order: 11,
        },
      },
      eslint: {
        data: {
          kind: 'eslint',
          name: 'Eslint',
          level: 'beginner',
          svg: SvgConst.eslint,
        },
        metadata: {
          order: 12,
        },
      },
      prettier: {
        data: {
          kind: 'prettier',
          name: 'Prettier',
          level: 'beginner',
          svg: SvgConst.prettier,
        },
        metadata: {
          order: 13,
        },
      },
      stylelint: {
        data: {
          kind: 'stylelint',
          name: 'Stylelint',
          level: 'beginner',
          svg: SvgConst.stylelint,
        },
        metadata: {
          order: 14,
        },
      },
      postgresql: {
        data: {
          kind: 'postgresql',
          name: 'PostgreSQL',
          level: 'beginner',
          svg: SvgConst.postgresql,
        },
        metadata: {
          order: 15,
        },
      },
      microsoftSqlServer: {
        data: {
          kind: 'microsoftSqlServer',
          name: 'Microsoft SQL Server',
          level: 'beginner',
          svg: SvgConst.microsoftSqlServer,
        },
        metadata: {
          order: 16,
        },
      },
      nginx: {
        data: {
          kind: 'nginx',
          name: 'NGINX',
          level: 'beginner',
          svg: SvgConst.nginx,
        },
        metadata: {
          order: 17,
        },
      },
      nodejs: {
        data: {
          kind: 'nodejs',
          name: 'Node.js',
          level: 'beginner',
          svg: SvgConst.nodejs,
        },
        metadata: {
          order: 18,
        },
      },
      docker: {
        data: {
          kind: 'docker',
          name: 'Docker',
          level: 'beginner',
          svg: SvgConst.docker,
        },
        metadata: {
          order: 19,
        },
      },
      snaplogic: {
        data: {
          kind: 'snaplogic',
          name: 'SnapLogic',
          level: 'beginner',
          svg: SvgConst.snaplogic,
        },
        metadata: {
          order: 20,
        },
      },
      n8n: {
        data: {
          kind: 'n8n',
          name: 'n8n',
          level: 'beginner',
          svg: SvgConst.n8n,
        },
        metadata: {
          order: 21,
        },
      },
      postman: {
        data: {
          kind: 'postman',
          name: 'Postman',
          level: 'beginner',
          svg: SvgConst.postman,
        },
        metadata: {
          order: 22,
        },
      },
      git: {
        data: {
          kind: 'git',
          name: 'Git',
          level: 'beginner',
          svg: SvgConst.git,
        },
        metadata: {
          order: 23,
        },
      },
      github: {
        data: {
          kind: 'github',
          name: 'GitHub',
          level: 'beginner',
          svg: SvgConst.github,
        },
        metadata: {
          order: 24,
        },
      },
      gitlab: {
        data: {
          kind: 'gitlab',
          name: 'GitLab',
          level: 'beginner',
          svg: SvgConst.gitlab,
        },
        metadata: {
          order: 25,
        },
      },
      npm: {
        data: {
          kind: 'npm',
          name: 'npm',
          level: 'beginner',
          svg: SvgConst.npm,
        },
        metadata: {
          order: 26,
        },
      },
      pnpm: {
        data: {
          kind: 'pnpm',
          name: 'pnpm',
          level: 'beginner',
          svg: SvgConst.pnpm,
        },
        metadata: {
          order: 27,
        },
      },
      nx: {
        data: {
          kind: 'nx',
          name: 'Nx',
          level: 'beginner',
          svg: SvgConst.nx,
        },
        metadata: {
          order: 28,
        },
      },
      webstorm: {
        data: {
          kind: 'webstorm',
          name: 'WebStorm',
          level: 'beginner',
          svg: SvgConst.webstorm,
        },
        metadata: {
          order: 29,
        },
      },
      eclipse: {
        data: {
          kind: 'eclipse',
          name: 'Eclipse',
          level: 'beginner',
          svg: SvgConst.eclipse,
        },
        metadata: {
          order: 30,
        },
      },
      visualStudioCode: {
        data: {
          kind: 'visualStudioCode',
          name: 'Visual Studio Code',
          level: 'beginner',
          svg: SvgConst.visualStudioCode,
        },
        metadata: {
          order: 31,
        },
      },
      visualParadigm: {
        data: {
          kind: 'visualParadigm',
          name: 'Visual Paradigm',
          level: 'beginner',
          svg: SvgConst.visualParadigm,
        },
        metadata: {
          order: 32,
        },
      },
      jira: {
        data: {
          kind: 'jira',
          name: 'Jira',
          level: 'beginner',
          svg: SvgConst.jira,
        },
        metadata: {
          order: 33,
        },
      },
      windows: {
        data: {
          kind: 'windows',
          name: 'Windows',
          level: 'beginner',
          svg: SvgConst.windows,
        },
        metadata: {
          order: 34,
        },
      },
      linux: {
        data: {
          kind: 'linux',
          name: 'Linux',
          level: 'beginner',
          svg: SvgConst.linux,
        },
        metadata: {
          order: 35,
        },
      },
    };
    expect(technologyDomainConst).toEqual(correctData);
  });
});
