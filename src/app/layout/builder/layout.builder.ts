import { Injectable } from '@angular/core';

import { LayoutModel } from '../model/layout.model';
import { SectionDomainBuilder } from '../../domain/builder/section-domain.builder';

@Injectable({ providedIn: 'root' })
export class LayoutBuilder {
  constructor(private readonly section: SectionDomainBuilder) {}

  build(): LayoutModel {
    return {
      kind: 'group',
      children: [
        {
          kind: 'leaf',
          domain: this.section.buildNav(),
        },
        {
          kind: 'leaf',
          domain: this.section.buildHome(),
        },
        {
          kind: 'leaf',
          domain: this.section.buildAboutMe(),
        },
        {
          kind: 'leaf',
          domain: this.section.buildTechnology(),
        },
        {
          kind: 'leaf',
          domain: this.section.buildSkill(),
        },
        {
          kind: 'leaf',
          domain: this.section.buildExperience(),
        },
        {
          kind: 'leaf',
          domain: this.section.buildResume(),
        },
        {
          kind: 'leaf',
          domain: this.section.buildEducation(),
        },
        {
          kind: 'leaf',
          domain: this.section.buildProject(),
        },
        {
          kind: 'leaf',
          domain: this.section.buildContact(),
        },
        {
          kind: 'leaf',
          domain: this.section.buildFooter(),
        },
      ],
    };
  }
}
