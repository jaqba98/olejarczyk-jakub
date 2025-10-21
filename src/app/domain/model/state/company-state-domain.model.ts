import { CityEntityDomainType } from '../../type/entity/city-entity-domain.type';
import { CompanyNameDomainType } from '../../type/name/company-name-domain.type';
import { CountryEntityDomainType } from '../../type/entity/country-entity-domain.type';
import { CompanyIdDomainType } from '../../type/id/company-id-domain.type';
import { BaseStateDomainModel } from '../base/base-state-domain.model';

export interface CompanyStateDomainModel extends BaseStateDomainModel<CompanyIdDomainType> {
  name: CompanyNameDomainType;
  city: CityEntityDomainType;
  country: CountryEntityDomainType;
}
