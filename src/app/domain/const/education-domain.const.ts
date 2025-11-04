import { BaseDomain } from '../model/base-domain.model';
import { EducationDomain } from '../model/education-domain.model';
import { EducationKindDomainType } from '../type/kind/education-kind-domain.type';

export const educationDomainConst: BaseDomain.Type<
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
      kind: 'psk',
      order: 1,
    },
  },
};
