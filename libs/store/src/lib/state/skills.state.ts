import { Selector, State } from '@ngxs/store';

import {
  SkillsClassNameEnum,
  SkillsModel,
  SkillsTitleEnum,
} from '@olejarczyk-jakub/model';

@State<SkillsModel>({
  name: 'skills',
  defaults: {
    skills: [
      {
        title: 'Front End',
        technologies: [
          {
            title: SkillsTitleEnum.html,
            className: SkillsClassNameEnum.html,
            colored: true,
          },
          {
            title: SkillsTitleEnum.css,
            className: SkillsClassNameEnum.css,
            colored: true,
          },
          {
            title: SkillsTitleEnum.sass,
            className: SkillsClassNameEnum.sass,
            colored: true,
          },
          {
            title: SkillsTitleEnum.javascript,
            className: SkillsClassNameEnum.javascript,
            colored: true,
          },
          {
            title: SkillsTitleEnum.typescript,
            className: SkillsClassNameEnum.typescript,
            colored: true,
          },
          {
            title: SkillsTitleEnum.angular,
            className: SkillsClassNameEnum.angular,
            colored: true,
          },
          {
            title: SkillsTitleEnum.angularMaterial,
            className: SkillsClassNameEnum.angularMaterial,
            colored: true,
          },
          {
            title: SkillsTitleEnum.rxjs,
            className: SkillsClassNameEnum.rxjs,
            colored: true,
          },
          {
            title: SkillsTitleEnum.ngrx,
            className: SkillsClassNameEnum.ngrx,
            colored: true,
          },
          {
            title: SkillsTitleEnum.storybook,
            className: SkillsClassNameEnum.storybook,
            colored: true,
          },
          {
            title: SkillsTitleEnum.jest,
            className: SkillsClassNameEnum.jest,
            colored: true,
          },
          {
            title: SkillsTitleEnum.karma,
            className: SkillsClassNameEnum.karma,
            colored: true,
          },
        ],
      },
      {
        title: 'Back End',
        technologies: [
          {
            title: SkillsTitleEnum.java,
            className: SkillsClassNameEnum.java,
            colored: true,
          },
          {
            title: SkillsTitleEnum.spring,
            className: SkillsClassNameEnum.spring,
            colored: true,
          },
          {
            title: SkillsTitleEnum.hibernate,
            className: SkillsClassNameEnum.hibernate,
            colored: true,
          },
          {
            title: SkillsTitleEnum.postgreSQL,
            className: SkillsClassNameEnum.postgreSQL,
            colored: true,
          },
          {
            title: SkillsTitleEnum.junit,
            className: SkillsClassNameEnum.junit,
            colored: true,
          },
          {
            title: SkillsTitleEnum.nodejs,
            className: SkillsClassNameEnum.nodejs,
            colored: true,
          },
          {
            title: SkillsTitleEnum.express,
            className: SkillsClassNameEnum.express,
            colored: true,
          },
          {
            title: SkillsTitleEnum.socketIo,
            className: SkillsClassNameEnum.socketIo,
            colored: false,
          },
        ],
      },
      {
        title: 'Tools',
        technologies: [
          {
            title: SkillsTitleEnum.docker,
            className: SkillsClassNameEnum.docker,
            colored: true,
          },
          {
            title: SkillsTitleEnum.git,
            className: SkillsClassNameEnum.git,
            colored: true,
          },
          {
            title: SkillsTitleEnum.gitHub,
            className: SkillsClassNameEnum.gitHub,
            colored: false,
          },
          {
            title: SkillsTitleEnum.gitLab,
            className: SkillsClassNameEnum.gitLab,
            colored: true,
          },
          {
            title: SkillsTitleEnum.maven,
            className: SkillsClassNameEnum.maven,
            colored: true,
          },
          {
            title: SkillsTitleEnum.npm,
            className: SkillsClassNameEnum.npm,
            colored: true,
          },
          {
            title: SkillsTitleEnum.pnpm,
            className: SkillsClassNameEnum.pnpm,
            colored: true,
          },
          {
            title: SkillsTitleEnum.eslint,
            className: SkillsClassNameEnum.eslint,
            colored: true,
          },
          {
            title: SkillsTitleEnum.postman,
            className: SkillsClassNameEnum.postman,
            colored: true,
          },
          {
            title: SkillsTitleEnum.windows11,
            className: SkillsClassNameEnum.windows11,
            colored: true,
          },
          {
            title: SkillsTitleEnum.linux,
            className: SkillsClassNameEnum.linux,
            colored: false,
          },
          {
            title: SkillsTitleEnum.intellij,
            className: SkillsClassNameEnum.intellij,
            colored: true,
          },
          {
            title: SkillsTitleEnum.vscode,
            className: SkillsClassNameEnum.vscode,
            colored: true,
          },
        ],
      },
    ],
  },
})
export class SkillsState {
  @Selector()
  static getSkills(state: SkillsModel): SkillsModel['skills'] {
    return state.skills;
  }
}
