import { Injectable } from '@angular/core';

import { DomainStateModel } from '../../../model/state/domain-state.model';
import { SectionKindType } from '../../../type/kind/section-kind.type';
import { LayoutModel } from '../../../model/layout/layout.model';

@Injectable({ providedIn: 'root' })
export class SectionLayoutBuilder {
  buildNav(state: DomainStateModel, children: LayoutModel[]): LayoutModel {
    return this.buildSection('nav', state, children);
  }

  buildHome(state: DomainStateModel, children: LayoutModel[]): LayoutModel {
    return this.buildSection('home', state, children);
  }

  buildAboutMe(state: DomainStateModel, children: LayoutModel[]): LayoutModel {
    return this.buildSection('aboutMe', state, children);
  }

  buildTechnology(state: DomainStateModel, children: LayoutModel[]): LayoutModel {
    return this.buildSection('technology', state, children);
  }

  buildSkill(state: DomainStateModel, children: LayoutModel[]): LayoutModel {
    return this.buildSection('skill', state, children);
  }

  buildExperience(state: DomainStateModel, children: LayoutModel[]): LayoutModel {
    return this.buildSection('experience', state, children);
  }

  buildResume(state: DomainStateModel, children: LayoutModel[]): LayoutModel {
    return this.buildSection('resume', state, children);
  }

  buildEducation(state: DomainStateModel, children: LayoutModel[]): LayoutModel {
    return this.buildSection('education', state, children);
  }

  buildProject(state: DomainStateModel, children: LayoutModel[]): LayoutModel {
    return this.buildSection('project', state, children);
  }

  buildContact(state: DomainStateModel, children: LayoutModel[]): LayoutModel {
    return this.buildSection('contact', state, children);
  }

  buildFooter(state: DomainStateModel, children: LayoutModel[]): LayoutModel {
    return this.buildSection('footer', state, children);
  }

  private buildSection(
    kind: SectionKindType,
    state: DomainStateModel,
    children: LayoutModel[],
  ): LayoutModel {
    return {
      kind: 'group',
      component: {
        kind: 'section',
        domain: {
          data: state.section[kind].data,
          metadata: state.section[kind].metadata,
          appearance: state.section[kind].appearance,
        },
      },
      children,
    };
  }
}
