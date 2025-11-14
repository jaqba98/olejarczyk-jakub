import { LayoutModel } from '../model/layout.model';
import { SectionDomainBuilder } from '../../domain/builder/section-domain.builder';
import { ParagraphDomainBuilder } from '../../domain/builder/paragraph-domain.builder';

export class LayoutBuilder {
  static build(): LayoutModel {
    return {
      kind: 'group',
      children: [
        {
          kind: 'group',
          domain: SectionDomainBuilder.buildNav(),
          children: [
            {
              kind: 'leaf',
              domain: ParagraphDomainBuilder.buildNav(),
            },
          ],
        },
        {
          kind: 'group',
          domain: SectionDomainBuilder.buildHome(),
          children: [
            {
              kind: 'leaf',
              domain: ParagraphDomainBuilder.buildHome(),
            },
          ],
        },
        {
          kind: 'group',
          domain: SectionDomainBuilder.buildAboutMe(),
          children: [
            {
              kind: 'leaf',
              domain: ParagraphDomainBuilder.buildAboutMe(),
            },
          ],
        },
        {
          kind: 'group',
          domain: SectionDomainBuilder.buildTechnology(),
          children: [
            {
              kind: 'leaf',
              domain: ParagraphDomainBuilder.buildTechnology(),
            },
          ],
        },
        {
          kind: 'group',
          domain: SectionDomainBuilder.buildSkill(),
          children: [
            {
              kind: 'leaf',
              domain: ParagraphDomainBuilder.buildSkill(),
            },
          ],
        },
        {
          kind: 'group',
          domain: SectionDomainBuilder.buildExperience(),
          children: [
            {
              kind: 'leaf',
              domain: ParagraphDomainBuilder.buildExperience(),
            },
          ],
        },
        {
          kind: 'group',
          domain: SectionDomainBuilder.buildResume(),
          children: [
            {
              kind: 'leaf',
              domain: ParagraphDomainBuilder.buildResume(),
            },
          ],
        },
        {
          kind: 'group',
          domain: SectionDomainBuilder.buildEducation(),
          children: [
            {
              kind: 'leaf',
              domain: ParagraphDomainBuilder.buildEducation(),
            },
          ],
        },
        {
          kind: 'group',
          domain: SectionDomainBuilder.buildProject(),
          children: [
            {
              kind: 'leaf',
              domain: ParagraphDomainBuilder.buildProject(),
            },
          ],
        },
        {
          kind: 'group',
          domain: SectionDomainBuilder.buildContact(),
          children: [
            {
              kind: 'leaf',
              domain: ParagraphDomainBuilder.buildContact(),
            },
          ],
        },
        {
          kind: 'group',
          domain: SectionDomainBuilder.buildFooter(),
          children: [
            {
              kind: 'leaf',
              domain: ParagraphDomainBuilder.buildFooter(),
            },
          ],
        },
      ],
    };
  }
}
