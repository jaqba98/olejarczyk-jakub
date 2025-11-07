import { AboutMeFieldDomainType } from '../../type/field/about-me-field-domain.type';
import { BaseDomain } from '../base/base-domain.model';

export namespace AboutMeDomain {
  export interface Data extends BaseDomain.Data<AboutMeFieldDomainType> {}

  export interface Metadata extends BaseDomain.Metadata {}

  export interface Layout extends BaseDomain.Layout {}
}
