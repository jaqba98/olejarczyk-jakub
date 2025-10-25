import { sectionDataConst } from '../../data/const/section-data.const';
import { SectionKindDataType } from '../../data/type/kind/section-kind-data.type';

export class SectionDataFinder {
  static find(sectionKind: SectionKindDataType) {
    if (sectionKind in sectionDataConst) {
      return sectionDataConst[sectionKind];
    }
    throw new Error(`The ${sectionKind} does not exist in the sectionDataConst!`);
  }

  static findNavigable() {
    return Object.values(sectionDataConst).filter((sectionData) => sectionData.navigable);
  }
}
