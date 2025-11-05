import { sectionDomainConst } from '../../domain/const/section-domain.const';
import { SectionKindDomainType } from '../../domain/type/kind/section-kind-domain.type';
import {
  SectionDataBuilderModel,
  SectionsDataBuilderModel,
} from '../model/data/section-data-builder.model';

export class SectionDataBuilder {
  static buildDataForKind(kind: SectionKindDomainType): SectionDataBuilderModel {
    if (kind in sectionDomainConst) {
      return sectionDomainConst[kind].data;
    }
    throw new Error(`The ${kind} does not exist in the sectionDomainConst!`);
  }

  static buildDataForRoutableSections(): SectionsDataBuilderModel {
    return Object.values(sectionDomainConst)
      .filter((sectionDomain) => sectionDomain.metadata.routable)
      .sort((prev, next) => prev.metadata.order - next.metadata.order)
      .map((sectionDomain) => sectionDomain.data);
  }

  static buildDataForAllSections(): SectionsDataBuilderModel {
    return Object.values(sectionDomainConst)
      .sort((prev, next) => prev.metadata.order - next.metadata.order)
      .map((sectionDomain) => sectionDomain.data);
  }
}
