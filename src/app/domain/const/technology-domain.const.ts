import { SvgConst } from '../../const/svg.const';
import { BaseDomain } from '../model/base-domain.model';
import { TechnologyDomain } from '../model/technology-domain.model';
import { TechnologyKindDomainType } from '../type/kind/technology-kind-domain.type';

export const technologyDomainConst: BaseDomain.Type<
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
      order: 35,
    },
  },
};
