import { TechnologyCategoryDateModel } from '../../data/model/technology-category-data.model';
import { TechnologyDateModel } from '../../data/model/technology-data.model';

export interface TechnologyStateModel {
  markupLanguage: {
    data: TechnologyCategoryDateModel['markupLanguage'];
    technologies: Pick<TechnologyDateModel, 'html'>;
  };
  stylesheetLanguage: {
    data: TechnologyCategoryDateModel['stylesheetLanguage'];
    technologies: Pick<TechnologyDateModel, 'css' | 'sass'>;
  };
  programmingLanguage: {
    data: TechnologyCategoryDateModel['programmingLanguage'];
    technologies: Pick<TechnologyDateModel, 'javascript' | 'typescript' | 'python'>;
  };
  framework: {
    data: TechnologyCategoryDateModel['framework'];
    technologies: Pick<TechnologyDateModel, 'angular'>;
  };
  library: {
    data: TechnologyCategoryDateModel['library'];
    technologies: Pick<TechnologyDateModel, 'rxjs' | 'storybook' | 'primeng' | 'numpy'>;
  };
  test: {
    data: TechnologyCategoryDateModel['test'];
    technologies: Pick<TechnologyDateModel, 'jest'>;
  };
  codeQuality: {
    data: TechnologyCategoryDateModel['codeQuality'];
    technologies: Pick<TechnologyDateModel, 'eslint' | 'prettier' | 'stylelint'>;
  };
  database: {
    data: TechnologyCategoryDateModel['database'];
    technologies: Pick<TechnologyDateModel, 'postgresql' | 'microsoftSqlServer'>;
  };
  server: {
    data: TechnologyCategoryDateModel['server'];
    technologies: Pick<TechnologyDateModel, 'nginx'>;
  };
  runtime: {
    data: TechnologyCategoryDateModel['runtime'];
    technologies: Pick<TechnologyDateModel, 'nodejs'>;
  };
  containerization: {
    data: TechnologyCategoryDateModel['containerization'];
    technologies: Pick<TechnologyDateModel, 'docker'>;
  };
  integrationPlatform: {
    data: TechnologyCategoryDateModel['integrationPlatform'];
    technologies: Pick<TechnologyDateModel, 'snaplogic' | 'n8n'>;
  };
  api: {
    data: TechnologyCategoryDateModel['api'];
    technologies: Pick<TechnologyDateModel, 'postman'>;
  };
  versionControlSystem: {
    data: TechnologyCategoryDateModel['versionControlSystem'];
    technologies: Pick<TechnologyDateModel, 'git' | 'github' | 'gitlab'>;
  };
  monorepo: {
    data: TechnologyCategoryDateModel['monorepo'];
    technologies: Pick<TechnologyDateModel, 'nx'>;
  };
  ide: {
    data: TechnologyCategoryDateModel['ide'];
    technologies: Pick<TechnologyDateModel, 'webstorm' | 'eclipse'>;
  };
  editor: {
    data: TechnologyCategoryDateModel['editor'];
    technologies: Pick<TechnologyDateModel, 'visualStudioCode'>;
  };
  diagram: {
    data: TechnologyCategoryDateModel['diagram'];
    technologies: Pick<TechnologyDateModel, 'visualParadigm'>;
  };
  projectManagement: {
    data: TechnologyCategoryDateModel['projectManagement'];
    technologies: Pick<TechnologyDateModel, 'jira'>;
  };
  operatingSystem: {
    data: TechnologyCategoryDateModel['operatingSystem'];
    technologies: Pick<TechnologyDateModel, 'windows' | 'linux'>;
  };
}
