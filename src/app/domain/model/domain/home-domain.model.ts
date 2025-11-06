import { BaseDomain } from '../base/base-domain.model';

export namespace HomeDomain {
  export interface Data extends BaseDomain.Data {
    greeting: string;
  }

  export interface Metadata extends BaseDomain.Metadata {}
}
