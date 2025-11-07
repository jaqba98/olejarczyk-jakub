import { BaseDomain } from '../../../data/model/base/base-data.model';

export namespace FooterDomain {
  export interface Data extends BaseDomain.Data {
    rightsDescription: string;
  }

  export interface Metadata extends BaseDomain.Metadata {}
}
