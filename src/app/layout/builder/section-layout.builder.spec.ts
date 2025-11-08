import { SectionDomainBuilder } from '../../domain/builder/section-domain.builder';
import { SectionLayoutModel } from '../model/section-layout.model';
import { SectionLayoutBuilder } from './section-layout.builder';

describe('Layout: Section', () => {
  it('should return valid data', () => {
    const domain = SectionDomainBuilder.build();
    const layout: SectionLayoutModel = {
      sections: [
        domain.nav,
        domain.home,
        domain.aboutMe,
        domain.technology,
        domain.skill,
        domain.experience,
        domain.resume,
        domain.education,
        domain.project,
        domain.contact,
        domain.footer,
      ],
    };
    expect(SectionLayoutBuilder.build()).toEqual(layout);
  });
});
