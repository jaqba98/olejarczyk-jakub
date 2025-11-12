import { SectionDataModel } from '../../data/model/section-data.model';
import { SectionMetadataModel } from '../../metadata/model/section-metadata.model';
import { KindComplexType } from '../type/kind-complex.type';
import { KindLayoutType } from '../type/kind-layout.type';

interface BaseComplexModel<TKind extends KindComplexType, TData, TMetadata> {
  kind: TKind;
  data: TData;
  metadata: TMetadata;
}

export interface SectionComplexModel
  extends BaseComplexModel<'section', SectionDataModel, SectionMetadataModel> {}

type ComplexType = SectionComplexModel;

export interface BaseLayoutModel<TKind extends KindLayoutType> {
  kind: TKind;
}

export interface LeafLayoutModel extends BaseLayoutModel<'leaf'> {
  complex: ComplexType;
}

export interface GroupLayoutModel extends BaseLayoutModel<'group'> {
  children: LayoutModel[];
}

export type LayoutModel = LeafLayoutModel | GroupLayoutModel;
