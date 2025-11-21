import { ComponentKindType } from '../../type/kind/component-kind.type';
import { LayoutKindType } from '../../type/kind/layout-kind.type';
import { ParagraphAppearanceModel } from '../appearance/paragraph-appearance.model';
import { SectionAppearanceValueModel } from '../appearance/section-appearance.model';
import { TechnologiesAppearanceModel } from '../appearance/technologies-appearance.model';
import { ParagraphDataModel } from '../data/paragraph-data.model';
import { SectionDataValueModel } from '../data/section-data.model';
import { TechnologiesDataModel } from '../data/technologies-data.model';
import { ParagraphMetadataModel } from '../metadata/paragraph-metadata.model';
import { SectionMetadataValueModel } from '../metadata/section-metadata.model';
import { TechnologiesMetadataModel } from '../metadata/description-metadata.model';

interface BaseComponentModel<TKind extends ComponentKindType> {
  kind: TKind;
}

interface ParagraphComponentModel extends BaseComponentModel<'paragraph'> {
  data: ParagraphDataModel;
  metadata: ParagraphMetadataModel;
  appearance: ParagraphAppearanceModel;
}

interface SectionComponentModel extends BaseComponentModel<'section'> {
  data: SectionDataValueModel;
  metadata: SectionMetadataValueModel;
  appearance: SectionAppearanceValueModel;
}

interface TechnologiesComponentModel extends BaseComponentModel<'technologies'> {
  data: TechnologiesDataModel;
  metadata: TechnologiesMetadataModel;
  appearance: TechnologiesAppearanceModel;
}

export type ComponentModel =
  | ParagraphComponentModel
  | SectionComponentModel
  | TechnologiesComponentModel;

interface BaseLayoutModel<TKind extends LayoutKindType> {
  kind: TKind;
}

export interface LeafLayoutModel extends BaseLayoutModel<'leaf'> {
  component: ComponentModel;
}

export interface GroupLayoutModel extends BaseLayoutModel<'group'> {
  children: LayoutModel[];
  component?: ComponentModel;
}

export type LayoutModel = LeafLayoutModel | GroupLayoutModel;
