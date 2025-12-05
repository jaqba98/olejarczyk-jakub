import { Injectable } from '@angular/core';

import { TechnologyRawModel } from '../../../model/raw/technology-raw.model';
import { SvgConst } from '../../../const/svg.const';

@Injectable({ providedIn: 'root' })
export class TechnologyRawBuilder {
  build(): TechnologyRawModel {
    return {
      html: {
        label: 'HTML',
        level: 'beginner',
        icon: SvgConst.html,
        categoryKind: 'markupLanguage',
      },
      css: {
        label: 'CSS',
        level: 'beginner',
        icon: SvgConst.css,
        categoryKind: 'stylesheetLanguage',
      },
      sass: {
        label: 'Sass',
        level: 'beginner',
        icon: SvgConst.sass,
        categoryKind: 'stylesheetLanguage',
      },
      javascript: {
        label: 'JavaScript',
        level: 'beginner',
        icon: SvgConst.javascript,
        categoryKind: 'programmingLanguage',
      },
      typescript: {
        label: 'TypeScript',
        level: 'beginner',
        icon: SvgConst.typescript,
        categoryKind: 'programmingLanguage',
      },
      python: {
        label: 'Python',
        level: 'beginner',
        icon: SvgConst.python,
        categoryKind: 'programmingLanguage',
      },
      angular: {
        label: 'Angular',
        level: 'beginner',
        icon: SvgConst.angular,
        categoryKind: 'framework',
      },
      rxjs: {
        label: 'RxJS',
        level: 'beginner',
        icon: SvgConst.rxjs,
        categoryKind: 'library',
      },
      storybook: {
        label: 'Storybook',
        level: 'beginner',
        icon: SvgConst.storybook,
        categoryKind: 'library',
      },
      primeng: {
        label: 'PrimeNG',
        level: 'beginner',
        icon: SvgConst.primeng,
        categoryKind: 'library',
      },
      numpy: {
        label: 'NumPy',
        level: 'beginner',
        icon: SvgConst.numpy,
        categoryKind: 'library',
      },
      jest: {
        label: 'Jest',
        level: 'beginner',
        icon: SvgConst.jest,
        categoryKind: 'test',
      },
      eslint: {
        label: 'Eslint',
        level: 'beginner',
        icon: SvgConst.eslint,
        categoryKind: 'codeQuality',
      },
      prettier: {
        label: 'Prettier',
        level: 'beginner',
        icon: SvgConst.prettier,
        categoryKind: 'codeQuality',
      },
      stylelint: {
        label: 'Stylelint',
        level: 'beginner',
        icon: SvgConst.stylelint,
        categoryKind: 'codeQuality',
      },
      postgresql: {
        label: 'PostgreSQL',
        level: 'beginner',
        icon: SvgConst.postgresql,
        categoryKind: 'database',
      },
      microsoftSqlServer: {
        label: 'Microsoft SQL Server',
        level: 'beginner',
        icon: SvgConst.microsoftSqlServer,
        categoryKind: 'database',
      },
      nginx: {
        label: 'NGINX',
        level: 'beginner',
        icon: SvgConst.nginx,
        categoryKind: 'server',
      },
      nodejs: {
        label: 'Node.js',
        level: 'beginner',
        icon: SvgConst.nodejs,
        categoryKind: 'runtime',
      },
      docker: {
        label: 'Docker',
        level: 'beginner',
        icon: SvgConst.docker,
        categoryKind: 'containerization',
      },
      snaplogic: {
        label: 'SnapLogic',
        level: 'beginner',
        icon: SvgConst.snaplogic,
        categoryKind: 'integrationPlatform',
      },
      n8n: {
        label: 'n8n',
        level: 'beginner',
        icon: SvgConst.n8n,
        categoryKind: 'integrationPlatform',
      },
      postman: {
        label: 'Postman',
        level: 'beginner',
        icon: SvgConst.postman,
        categoryKind: 'api',
      },
      git: {
        label: 'Git',
        level: 'beginner',
        icon: SvgConst.git,
        categoryKind: 'versionControlSystem',
      },
      github: {
        label: 'GitHub',
        level: 'beginner',
        icon: SvgConst.github,
        categoryKind: 'versionControlSystem',
      },
      gitlab: {
        label: 'GitLab',
        level: 'beginner',
        icon: SvgConst.gitlab,
        categoryKind: 'versionControlSystem',
      },
      npm: {
        label: 'npm',
        level: 'beginner',
        icon: SvgConst.npm,
        categoryKind: 'packageManager',
      },
      pnpm: {
        label: 'pnpm',
        level: 'beginner',
        icon: SvgConst.pnpm,
        categoryKind: 'packageManager',
      },
      nx: {
        label: 'Nx',
        level: 'beginner',
        icon: SvgConst.nx,
        categoryKind: 'monorepo',
      },
      webstorm: {
        label: 'WebStorm',
        level: 'beginner',
        icon: SvgConst.webstorm,
        categoryKind: 'ide',
      },
      eclipse: {
        label: 'Eclipse',
        level: 'beginner',
        icon: SvgConst.eclipse,
        categoryKind: 'ide',
      },
      visualStudioCode: {
        label: 'Visual Studio Code',
        level: 'beginner',
        icon: SvgConst.visualStudioCode,
        categoryKind: 'editor',
      },
      visualParadigm: {
        label: 'Visual Paradigm',
        level: 'beginner',
        icon: SvgConst.visualParadigm,
        categoryKind: 'diagram',
      },
      jira: {
        label: 'Jira',
        level: 'beginner',
        icon: SvgConst.jira,
        categoryKind: 'projectManagement',
      },
      windows: {
        label: 'Windows',
        level: 'beginner',
        icon: SvgConst.windows,
        categoryKind: 'operatingSystem',
      },
      linux: {
        label: 'Linux',
        level: 'beginner',
        icon: SvgConst.linux,
        categoryKind: 'operatingSystem',
      },
    };
  }
}
