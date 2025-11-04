import { GradeEntityDomainType } from '../type/entity/grade-entity-domain.type';
import { EducationKindDomainType } from '../type/kind/education-kind-domain.type';
import { DegreeNameDomainType } from '../type/name/degree-name-domain.type';
import { FieldOfStudyNameDomainType } from '../type/name/field-of-study-name-domain.type';
import { SchoolNameDomainType } from '../type/name/school-name-domain.type';

export namespace EducationDomain {
  export interface Data {
    school: SchoolNameDomainType;
    degree: DegreeNameDomainType;
    fieldOfStudy: FieldOfStudyNameDomainType;
    startYear: number;
    endYear: number | null;
    grade: GradeEntityDomainType;
  }

  export interface Metadata {
    kind: EducationKindDomainType;
    order: number;
  }
}
