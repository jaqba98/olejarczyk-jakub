import { BaseDomain } from '../base/base-domain.model';

export namespace AboutMeDomain {
  export interface Data extends BaseDomain.Data {
    descriptions: string[];
  }

  export interface Metadata extends BaseDomain.Metadata {}
}
