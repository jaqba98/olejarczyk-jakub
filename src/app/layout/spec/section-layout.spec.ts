import { sectionDataConst } from '../../data/const/section-data.const';
import { sectionLayoutConst } from '../const/section-layout.const';
import { SectionLayoutModel } from '../model/section-layout.model';

describe('Layout: Section', () => {
  it('should return valid data', () => {
    const layout: SectionLayoutModel = [
      sectionDataConst.nav,
      sectionDataConst.home,
      sectionDataConst.aboutMe,
      sectionDataConst.technology,
      sectionDataConst.skill,
      sectionDataConst.experience,
      sectionDataConst.resume,
      sectionDataConst.education,
      sectionDataConst.project,
      sectionDataConst.contact,
      sectionDataConst.footer,
    ];
    expect(sectionLayoutConst).toEqual(layout);
  });
});
