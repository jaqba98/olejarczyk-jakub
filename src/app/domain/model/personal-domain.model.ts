import { FirstNameDomainType } from '../type/name/first-name-domain.type';
import { LastNameDomainType } from '../type/name/last-name-domain.type';

export namespace PersonalDomain {
  export interface Data {
    firstName: FirstNameDomainType;
    lastName: LastNameDomainType;
  }

  export interface Metadata {}
}
