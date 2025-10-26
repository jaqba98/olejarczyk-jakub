import { sectionDomainConst } from '../../domain/const/section-domain.const';
import { SectionKindDomainType } from '../../domain/type/kind/section-kind-domain.type';
import { SectionDataModel } from '../model/data/section-data.model';

export class SectionDomainFinder {
  static findDataByKind(kind: SectionKindDomainType): SectionDataModel {
    if (kind in sectionDomainConst) {
      return sectionDomainConst[kind].data;
    }
    throw new Error(`The ${kind} does not exist in the sectionDomainConst!`);
  }
}
