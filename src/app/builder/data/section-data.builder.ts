import { sectionDomainConst } from '../../domain/const/section-domain.const';
import { SectionKindDomainType } from '../../domain/type/kind/section-kind-domain.type';
import { SectionDataBuilderModel } from '../model/data/section-data-builder.model';

export class SectionDataBuilder {
  static buildDataForKind(kind: SectionKindDomainType): SectionDataBuilderModel {
    if (kind in sectionDomainConst) {
      return sectionDomainConst[kind].data;
    }
    throw new Error(`The ${kind} does not exist in the sectionDomainConst!`);
  }

  static buildDataForRoutableSections(): SectionDataBuilderModel[] {
    return Object.values(sectionDomainConst)
      .filter((sectionDomain) => sectionDomain.metadata.routable)
      .map((sectionDomain) => sectionDomain.data);
  }
}
