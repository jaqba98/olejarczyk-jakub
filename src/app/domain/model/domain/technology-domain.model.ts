import { SvgModel } from '../../../model/svg.model';
import { TechnologyCategoryKindDomainType } from '../../type/kind/technology-category-kind-domain.type';
import { TechnologyKindDomainType } from '../../type/kind/technology-kind-domain.type';
import { TechnologyLevelDomainType } from '../../type/level/technology-level-domain.type';
import { TechnologyNameDomainType } from '../../type/name/technology-name-domain.type';
import { BaseDomain } from '../../../data/model/base/base-data.model';

export namespace TechnologyDomain {
  export interface Data extends BaseDomain.Data {
    name: TechnologyNameDomainType;
    level: TechnologyLevelDomainType;
    svg: SvgModel;
  }

  export interface Metadata extends BaseDomain.Metadata {
    kind: TechnologyKindDomainType;
    categoryKind: TechnologyCategoryKindDomainType;
    order: number;
  }
}
