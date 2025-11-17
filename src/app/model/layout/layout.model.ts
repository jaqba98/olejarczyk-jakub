import { ComponentKindType } from '../../type/kind/component-kind.type';
import { GroupModeKindType } from '../../type/kind/group-mode-kind.type';
import { LayoutKindType } from '../../type/kind/layout-kind.type';
import { ParagraphAppearanceModel } from '../appearance/paragraph-appearance.model';
import { SectionAppearanceValueModel } from '../appearance/section-appearance.model';
import { ParagraphDataModel } from '../data/paragraph-data.model';
import { SectionDataValueModel } from '../data/section-data.model';
import { ParagraphMetadataModel } from '../metadata/paragraph-metadata.model';
import { SectionMetadataValueModel } from '../metadata/section-metadata.model';

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

export type ComponentModel = ParagraphComponentModel | SectionComponentModel;

interface BaseLayoutModel<TKind extends LayoutKindType> {
  kind: TKind;
}

export interface LeafLayoutModel extends BaseLayoutModel<'leaf'> {
  component: ComponentModel;
}

export interface GroupLayoutModel extends BaseLayoutModel<'group'> {
  children: LayoutModel[];
  component?: ComponentModel;
  mode: GroupModeKindType;
}

export type LayoutModel = LeafLayoutModel | GroupLayoutModel;
