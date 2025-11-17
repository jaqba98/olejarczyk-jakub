import { CssClassKindType } from '../../type/kind/css-class-kind.type';
import { SectionKindType } from '../../type/kind/section-kind.type';

export interface SectionAppearanceValueModel {
  section: CssClassKindType[];
  container: CssClassKindType[];
}

export type SectionAppearanceModel = Record<SectionKindType, SectionAppearanceValueModel>;
