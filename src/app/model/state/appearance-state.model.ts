import { ParagraphAppearanceModel } from '../appearance/paragraph-appearance.model';
import { SectionAppearanceModel } from '../appearance/section-appearance.model';
import { TechnologiesAppearanceModel } from '../appearance/technologies-appearance.model';

export interface AppearanceStateModel {
  copyright: ParagraphAppearanceModel;
  section: SectionAppearanceModel;
  technologies: TechnologiesAppearanceModel;
  aboutMe: ParagraphAppearanceModel;
}
