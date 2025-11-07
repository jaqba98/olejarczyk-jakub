import { sectionDataConst } from '../../data/const/section-data.const';
import { sectionMetadataConst } from '../../metadata/const/section-metadata.const';
import { SectionKindType } from '../../type/kind/section-kind.type';
import { SectionLayoutModel } from '../model/section-layout.model';

export const sectionLayoutConst: SectionLayoutModel = Object.entries(sectionDataConst)
  .map(([kind, data]) => ({
    kind: kind as SectionKindType,
    data,
  }))
  .map((item) => ({
    data: item.data,
    metadata: sectionMetadataConst[item.kind],
  }))
  .sort((a, b) => a.metadata.order - b.metadata.order)
  .map((item) => item.data);
