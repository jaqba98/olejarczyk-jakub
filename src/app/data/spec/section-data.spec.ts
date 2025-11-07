import { sectionDataConst } from '../const/section-data.const';
import { SectionDataModel } from '../model/section-data.model';

describe('Data: Section', () => {
  it('should return valid data', () => {
    const data: SectionDataModel = {
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
    expect(sectionDataConst).toEqual(data);
  });
});
