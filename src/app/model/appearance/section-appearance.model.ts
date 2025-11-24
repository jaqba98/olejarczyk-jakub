import { ClassCssType } from '../../type/css/class-css.type';
import { SectionKindType } from '../../type/kind/section-kind.type';

export interface SectionAppearanceItemModel {
  main: ClassCssType[];
  container: ClassCssType[];
  title: ClassCssType[];
}

export type SectionAppearanceModel = Record<SectionKindType, SectionAppearanceItemModel>;
