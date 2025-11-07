import { sectionLayoutConst } from '../const/section-layout.const';
import { SectionLayoutModel } from '../model/section-layout.model';

describe('Layout: Section', () => {
  it('should return valid data', () => {
    const data: SectionLayoutModel = {
      nav: '',
      home: '',
      aboutMe: '',
      technology: '',
      skill: '',
      experience: '',
      resume: '',
      education: '',
      project: '',
      contact: '',
      footer: '',
    };
    expect(sectionLayoutConst).toEqual(data);
  });
});
