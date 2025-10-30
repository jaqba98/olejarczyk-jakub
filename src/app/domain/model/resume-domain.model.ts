import { DocumentAssetDomainType } from '../type/asset/document-asset-domain.type';

export namespace ResumeDomain {
  export interface Data {
    resumeEng: DocumentAssetDomainType;
    resumePl: DocumentAssetDomainType;
  }

  export interface Metadata {}
}
