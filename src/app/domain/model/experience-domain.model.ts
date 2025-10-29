import { CompanyKindDomainType } from '../type/kind/company-kind-domain.type';
import { TechnologyKindDomainType } from '../type/kind/technology-kind-domain.type';
import { ExperienceTitleDomainType } from '../type/title/experience-title-domain.type';
import { EmploymentTypeDomainType } from '../type/type/employment-type-domain.type';
import { LocationTypeDomainType } from '../type/type/location-type-domain.type';

export namespace ExperienceDomain {
  export interface Model {
    experienceTitle: ExperienceTitleDomainType;
    employmentType: EmploymentTypeDomainType;
    startDate: Date;
    endDate: Date | null;
    locationType: LocationTypeDomainType;
    description: string[];
    technologyIds: TechnologyKindDomainType[];
    order: number;
  }

  export interface Data {
    experiences: Model[];
  }

  export interface Metadata {
    companyKind: CompanyKindDomainType;
    order: number;
  }
}
