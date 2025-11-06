import { TechnologyCategoryKindDomainType } from '../../type/kind/technology-category-kind-domain.type';
import { TechnologyCategoryNameDomainType } from '../../type/name/technology-category-name-domain.type';
import { BaseDomain } from '../base/base-domain.model';

export namespace TechnologyCategoryDomain {
  export interface Data extends BaseDomain.Data {
    name: TechnologyCategoryNameDomainType;
  }

  export interface Metadata extends BaseDomain.Metadata {
    kind: TechnologyCategoryKindDomainType;
    order: number;
  }
}
