import { sectionDomainConst } from '../../domain/const/section-domain.const';
import { SectionKindDomainType } from '../../domain/type/kind/section-kind-domain.type';

export class SectionDomainFinder {
  static findByKind(kind: SectionKindDomainType) {
    if (kind in sectionDomainConst) {
      return sectionDomainConst[kind];
    }
    throw new Error(`The ${kind} does not exist in the sectionDomainConst!`);
  }
}
