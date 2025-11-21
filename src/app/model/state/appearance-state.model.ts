import { ParagraphAppearanceModel } from '../appearance/paragraph-appearance.model';
import { SectionAppearanceModel } from '../appearance/section-appearance.model';

export interface AppearanceStateModel {
  copyright: ParagraphAppearanceModel;
  description: ParagraphAppearanceModel;
  section: SectionAppearanceModel;
}
