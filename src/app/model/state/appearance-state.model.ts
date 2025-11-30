import { ParagraphAppearanceModel } from '../appearance/paragraph-appearance.model';
import { SectionAppearanceModel } from '../appearance/section-appearance.model';
import { TechnologyAppearanceModel } from '../appearance/technology-appearance.model';

export interface AppearanceStateModel {
  copyright: ParagraphAppearanceModel;
  description: ParagraphAppearanceModel;
  section: SectionAppearanceModel;
  technology: TechnologyAppearanceModel;
}
