import { BaseDomain } from '../../../data/model/base/base-data.model';

export namespace HomeDomain {
  export interface Data extends BaseDomain.Data {
    greeting: string;
  }

  export interface Metadata extends BaseDomain.Metadata {}
}
