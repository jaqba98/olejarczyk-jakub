import { BaseCompose } from '../../data/model/base/base-combo-data.model';
import { EducationDomain } from '../model/domain/education-domain.model';
import { EducationKindDomainType } from '../type/kind/education-kind-domain.type';
import { educationDomainConst } from './education-domain.const';

describe('Education Domain Const', () => {
  it('Should return the correct data', () => {
    const correctData: BaseCompose.Type<
      EducationKindDomainType,
      EducationDomain.Data,
      EducationDomain.Metadata
    > = {
      ujk: {
        data: {
          school: 'Jan Kochanowski University of Kielce',
          degree: 'Bachelor of Engineering',
          fieldOfStudy: 'Computer Science',
          startYear: 2017,
          endYear: 2021,
          grade: 4,
        },
        metadata: {
          test: 'test',
          kind: 'ujk',
          order: 0,
        },
      },
      psk: {
        data: {
          school: 'Kielce University of Technology',
          degree: 'Master of Science',
          fieldOfStudy: 'Information Systems',
          startYear: 2024,
          endYear: null,
          grade: 'none',
        },
        metadata: {
          test: 'test',
          kind: 'psk',
          order: 1,
        },
      },
    };
    expect(educationDomainConst).toEqual(correctData);
  });
});
