import { TechnologyCategoryKindDomainType } from '../type/kind/technology-category-kind-domain.type';
import { TechnologyCategoryNameDomainType } from '../type/name/technology-category-name-domain.type';

export namespace TechnologyCategoryDomain {
  export interface Data {
    kind: TechnologyCategoryKindDomainType;
    name: TechnologyCategoryNameDomainType;
  }

  export interface Metadata {
    order: number;
  }
}
