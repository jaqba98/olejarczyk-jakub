import { SectionDomainBuilder } from '../../domain/builder/section-domain.builder';
import { SectionLayoutModel } from '../model/section-layout.model';
import { SectionLayoutBuilder } from './section-layout.builder';

describe('Layout: Section', () => {
  it('should return valid data', () => {
    const domain = SectionDomainBuilder.build();
    const layout: SectionLayoutModel = {
      sections: [
        domain.nav.data,
        domain.home.data,
        domain.aboutMe.data,
        domain.technology.data,
        domain.skill.data,
        domain.experience.data,
        domain.resume.data,
        domain.education.data,
        domain.project.data,
        domain.contact.data,
        domain.footer.data,
      ],
    };
    expect(SectionLayoutBuilder.build()).toEqual(layout);
  });
});
