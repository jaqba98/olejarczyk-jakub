import { LayoutModel } from '../model/layout.model';
import { SectionDomainBuilder } from '../../domain/builder/section-domain.builder';
import { ParagraphDomainBuilder } from '../../domain/builder/paragraph-domain.builder';

export class LayoutBuilder {
  static build(): LayoutModel {
    return {
      kind: 'group',
      children: [
        {
          kind: 'leaf',
          domain: SectionDomainBuilder.buildNav(),
        },
        {
          kind: 'leaf',
          domain: SectionDomainBuilder.buildHome(),
        },
        {
          kind: 'leaf',
          domain: SectionDomainBuilder.buildAboutMe(),
        },
        {
          kind: 'leaf',
          domain: SectionDomainBuilder.buildTechnology(),
        },
        {
          kind: 'leaf',
          domain: SectionDomainBuilder.buildSkill(),
        },
        {
          kind: 'leaf',
          domain: SectionDomainBuilder.buildExperience(),
        },
        {
          kind: 'leaf',
          domain: SectionDomainBuilder.buildResume(),
        },
        {
          kind: 'leaf',
          domain: SectionDomainBuilder.buildEducation(),
        },
        {
          kind: 'leaf',
          domain: SectionDomainBuilder.buildProject(),
        },
        {
          kind: 'leaf',
          domain: SectionDomainBuilder.buildContact(),
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
