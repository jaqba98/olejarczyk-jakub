import { SizeAppearanceType } from '../type/size-appearance.type';
import { WidthAppearanceType } from '../type/width-appearance.type';

interface SectionContainerModel {
  maxWidth: WidthAppearanceType;
}

interface SectionModel {
  padding: SizeAppearanceType;
  container: SectionContainerModel;
}

export interface SectionAppearanceModel {
  section: SectionModel;
}
