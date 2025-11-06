import { BaseCompose } from '../model/base/base-compose.model';
import { EducationDomain } from '../model/domain/education-domain.model';
import { EducationKindDomainType } from '../type/kind/education-kind-domain.type';

export const educationDomainConst: BaseCompose.Type<
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
