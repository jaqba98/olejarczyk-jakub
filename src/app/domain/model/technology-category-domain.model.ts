import { TechnologyCategoryKindDomainType } from '../type/kind/technology-category-kind-domain.type';
import { TechnologyCategoryNameDomainType } from '../type/name/technology-category-name-domain.type';

export namespace TechnologyCategoryDomain {
  export interface Data {
    name: TechnologyCategoryNameDomainType;
  }

  export interface Metadata {
    kind: TechnologyCategoryKindDomainType;
    order: number;
  }
}
