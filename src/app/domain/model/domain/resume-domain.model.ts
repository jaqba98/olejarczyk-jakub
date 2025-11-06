import { DocumentAssetDomainType } from '../../type/asset/document-asset-domain.type';
import { BaseDomain } from '../base/base-domain.model';

export namespace ResumeDomain {
  export interface Data extends BaseDomain.Data {
    resumeEng: DocumentAssetDomainType;
    resumePl: DocumentAssetDomainType;
  }

  export interface Metadata extends BaseDomain.Metadata {}
}
