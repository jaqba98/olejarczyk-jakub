import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyStateModel } from '../model/technology-state.model';
import { technologyCategoryDataConst } from '../../data/const/technology-category-data.const';
import { technologyDataConst } from '../../data/const/technology-data.const';

@State<TechnologyStateModel>({
  name: 'technology',
  defaults: {
    markupLanguage: {
      data: technologyCategoryDataConst.markupLanguage,
      technologies: {
        html: technologyDataConst.html,
      },
    },
    stylesheetLanguage: {
      data: technologyCategoryDataConst.stylesheetLanguage,
      technologies: {
        css: technologyDataConst.css,
        sass: technologyDataConst.sass,
      },
    },
    programmingLanguage: {
      data: technologyCategoryDataConst.programmingLanguage,
      technologies: {
        javascript: technologyDataConst.javascript,
        typescript: technologyDataConst.typescript,
        python: technologyDataConst.python,
      },
    },
    framework: {
      data: technologyCategoryDataConst.framework,
      technologies: {
        angular: technologyDataConst.angular,
      },
    },
    library: {
      data: technologyCategoryDataConst.library,
      technologies: {
        rxjs: technologyDataConst.rxjs,
        storybook: technologyDataConst.storybook,
        primeng: technologyDataConst.primeng,
        numpy: technologyDataConst.numpy,
      },
    },
    test: {
      data: technologyCategoryDataConst.test,
      technologies: {
        jest: technologyDataConst.jest,
      },
    },
    codeQuality: {
      data: technologyCategoryDataConst.codeQuality,
      technologies: {
        eslint: technologyDataConst.eslint,
        prettier: technologyDataConst.prettier,
        stylelint: technologyDataConst.stylelint,
      },
    },
    database: {
      data: technologyCategoryDataConst.database,
      technologies: {
        postgresql: technologyDataConst.postgresql,
        microsoftSqlServer: technologyDataConst.microsoftSqlServer,
      },
    },
    server: {
      data: technologyCategoryDataConst.server,
      technologies: {
        nginx: technologyDataConst.nginx,
      },
    },
    runtime: {
      data: technologyCategoryDataConst.runtime,
      technologies: {
        nodejs: technologyDataConst.nodejs,
      },
    },
    containerization: {
      data: technologyCategoryDataConst.containerization,
      technologies: {
        docker: technologyDataConst.docker,
      },
    },
    integrationPlatform: {
      data: technologyCategoryDataConst.integrationPlatform,
      technologies: {
        snaplogic: technologyDataConst.snaplogic,
        n8n: technologyDataConst.n8n,
      },
    },
    api: {
      data: technologyCategoryDataConst.api,
      technologies: {
        postman: technologyDataConst.postman,
      },
    },
    versionControlSystem: {
      data: technologyCategoryDataConst.versionControlSystem,
      technologies: {
        git: technologyDataConst.git,
        github: technologyDataConst.github,
        gitlab: technologyDataConst.gitlab,
      },
    },
    monorepo: {
      data: technologyCategoryDataConst.monorepo,
      technologies: {
        nx: technologyDataConst.nx,
      },
    },
    ide: {
      data: technologyCategoryDataConst.ide,
      technologies: {
        webstorm: technologyDataConst.webstorm,
        eclipse: technologyDataConst.eclipse,
      },
    },
    editor: {
      data: technologyCategoryDataConst.editor,
      technologies: {
        visualStudioCode: technologyDataConst.visualStudioCode,
      },
    },
    diagram: {
      data: technologyCategoryDataConst.diagram,
      technologies: {
        visualParadigm: technologyDataConst.visualParadigm,
      },
    },
    projectManagement: {
      data: technologyCategoryDataConst.projectManagement,
      technologies: {
        jira: technologyDataConst.jira,
      },
    },
    operatingSystem: {
      data: technologyCategoryDataConst.operatingSystem,
      technologies: {
        windows: technologyDataConst.windows,
        linux: technologyDataConst.linux,
      },
    },
  },
})
@Injectable()
export class TechnologyStoreState {
  @Selector()
  static getState(state: TechnologyStateModel) {
    return state;
  }
}
