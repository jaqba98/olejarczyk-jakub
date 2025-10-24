import { EmploymentTypeDomainType } from '../../type/type/employment-type-domain.type';
import { ExperienceTitleDomainType } from '../../type/title/experience-title-domain.type';
import { LocationTypeDomainType } from '../../type/type/location-type-domain.type';
import { CompanyIdDomainType } from '../../../data/type/id/company-id-data.type';
import { TechnologyIdDomainType } from '../../type/id/technology-id-domain.type';
import { BaseStateDomainModel } from '../base/base-state-domain.model';

export interface ExperienceStateModel extends BaseStateDomainModel<CompanyIdDomainType> {
  title: ExperienceTitleDomainType;
  employmentType: EmploymentTypeDomainType;
  startDate: Date;
  endDate: Date | null;
  locationType: LocationTypeDomainType;
  description: string[];
  technologyIds: TechnologyIdDomainType[];
}

export interface ExperienceCompanyStateModel extends BaseStateDomainModel<CompanyIdDomainType> {
  experiences: ExperienceStateModel[];
}

export type ExperienceStateDomainModel = Record<CompanyIdDomainType, ExperienceCompanyStateModel>;
