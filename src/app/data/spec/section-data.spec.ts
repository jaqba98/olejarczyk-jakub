import { sectionDataConst } from '../const/section-data.const';
import { SectionDataModel } from '../model/section-data.model';

describe('Data: Section', () => {
  it('should return valid data', () => {
    const data: SectionDataModel = {
      nav: {
        id: '',
        label: '',
        href: '',
      },
      home: {
        id: '',
        label: '',
        href: '',
      },
      aboutMe: {
        id: '',
        label: '',
        href: '',
      },
      technology: {
        id: '',
        label: '',
        href: '',
      },
      skill: {
        id: '',
        label: '',
        href: '',
      },
      experience: {
        id: '',
        label: '',
        href: '',
      },
      resume: {
        id: '',
        label: '',
        href: '',
      },
      education: {
        id: '',
        label: '',
        href: '',
      },
      project: {
        id: '',
        label: '',
        href: '',
      },
      contact: {
        id: '',
        label: '',
        href: '',
      },
      footer: {
        id: '',
        label: '',
        href: '',
      },
    };
    expect(sectionDataConst).toEqual(data);
  });
});
