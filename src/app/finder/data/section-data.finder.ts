import { SectionIdDataType } from '../../data/type/id/section-id-data.type';
import { sectionDataConst } from '../../data/const/section-data.const';

export class SectionDataFinder {
  static find(sectionId: SectionIdDataType) {
    if (sectionId in sectionDataConst) {
      return sectionDataConst[sectionId];
    }
    throw new Error(`The sectionId: ${sectionId} does not exist in the sectionDataConst!`);
  }
}
