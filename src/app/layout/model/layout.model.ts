import { DataModel } from '../../data/model/data.model';
import { KindLayoutType } from '../type/kind-layout.type';

export interface BaseLayoutModel<TKind extends KindLayoutType> {
  kind: TKind;
}

export interface LeafLayoutModel extends BaseLayoutModel<'leaf'> {
  data: DataModel;
}

export interface GroupLayoutModel extends BaseLayoutModel<'group'> {
  children: LayoutModel[];
}

export type LayoutModel = LeafLayoutModel | GroupLayoutModel;
