import { sectionBareConst } from '../../bare/const/section-bare.const';
import { SectionKindBareType } from '../../bare/type/kind/section-kind-bare.type';

export class SectionBuilderData {
  static buildSectionId(kind: SectionKindBareType): string {
    const section = sectionBareConst[kind];
    return section.id;
  }

  static buildSectionLabel(kind: SectionKindBareType): string {
    const section = sectionBareConst[kind];
    return section.label;
  }

  static buildSectionHref(kind: SectionKindBareType): string {
    const section = sectionBareConst[kind];
    return section.href;
  }
}
