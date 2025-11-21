import { CssClassKindType } from '../../type/css/class-css.type';
import { SectionKindType } from '../../type/kind/section-kind.type';

export interface SectionAppearanceValueModel {
  section: CssClassKindType[];
  container: CssClassKindType[];
}

export type SectionAppearanceModel = Record<SectionKindType, SectionAppearanceValueModel>;
