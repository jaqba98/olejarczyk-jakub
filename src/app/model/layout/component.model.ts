import { ComponentKindType } from '../../type/kind/component-kind.type';
import { ParagraphAppearanceModel } from '../appearance/paragraph-appearance.model';
import { SectionAppearanceItemModel } from '../appearance/section-appearance.model';
import { ParagraphDataModel } from '../data/paragraph-data.model';
import { SectionDataItemModel } from '../data/section-data.model';
import { ParagraphMetadataModel } from '../metadata/paragraph-metadata.model';
import { SectionMetadataItemModel } from '../metadata/section-metadata.model';

interface BaseComponentModel<TKind extends ComponentKindType> {
  kind: TKind;
}

interface ParagraphComponentModel extends BaseComponentModel<'paragraph'> {
  data: ParagraphDataModel;
  metadata: ParagraphMetadataModel;
  appearance: ParagraphAppearanceModel;
}

interface SectionComponentModel extends BaseComponentModel<'section'> {
  data: SectionDataItemModel;
  metadata: SectionMetadataItemModel;
  appearance: SectionAppearanceItemModel;
}

export type ComponentModel = ParagraphComponentModel | SectionComponentModel;
