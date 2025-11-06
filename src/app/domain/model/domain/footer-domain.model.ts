import { BaseDomain } from '../base/base-domain.model';

export namespace FooterDomain {
  export interface Data extends BaseDomain.Data {
    rightsDescription: string;
  }

  export interface Metadata extends BaseDomain.Metadata {}
}
