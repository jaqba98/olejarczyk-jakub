import { CssClassKindType } from '../../type/kind/css-class-kind.type';
import { SectionKindType } from '../../type/kind/section-kind.type';

interface SectionModel {
  section: CssClassKindType[];
  container: CssClassKindType[];
}

export type SectionAppearanceModel = Record<SectionKindType, SectionModel>;
