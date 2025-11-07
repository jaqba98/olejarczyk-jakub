import { sectionLayoutConst } from '../const/section-layout.const';
import { SectionLayout } from '../model/section-layout.model';

describe('Layout: Section', () => {
  it('should return valid data', () => {
    const data: SectionLayout.Type = {
      nav: {},
      home: {},
      aboutMe: {},
      technology: {},
      skill: {},
      experience: {},
      resume: {},
      education: {},
      project: {},
      contact: {},
      footer: {},
    };
    expect(sectionLayoutConst).toEqual(data);
  });
});
