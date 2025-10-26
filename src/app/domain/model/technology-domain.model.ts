import { SvgModel } from '../../model/svg.model';
import { TechnologyKindDomainType } from '../type/kind/technology-kind-domain.type';
import { TechnologyLevelDomainType } from '../type/level/technology-level-domain.type';
import { TechnologyNameDomainType } from '../type/name/technology-name-domain.type';

export namespace TechnologyDomain {
  export interface Data {
    kind: TechnologyKindDomainType;
    name: TechnologyNameDomainType;
    level: TechnologyLevelDomainType;
    svg: SvgModel;
  }

  export interface Metadata {
    order: number;
  }
}
