import { CompanyKindDomainType } from '../type/kind/company-kind-domain.type';
import { CityNameDomainType } from '../type/name/city-name-domain.type';
import { CompanyNameDomainType } from '../type/name/company-name-domain.type';
import { CountryNameDomainType } from '../type/name/country-name-domain.type';

export namespace CompanyDomain {
  export interface Data {
    kind: CompanyKindDomainType;
    name: CompanyNameDomainType;
    city: CityNameDomainType;
    country: CountryNameDomainType;
  }

  export interface Metadata {
    order: number;
  }
}
