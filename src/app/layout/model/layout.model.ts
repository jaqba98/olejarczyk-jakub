import { DataModel } from '../../data/model/data.model';
import { KindLayoutEnum } from '../enum/kind-layout.enum';

interface BaseLayoutModel {
  data: DataModel;
}

export interface LeafLayoutModel extends BaseLayoutModel {
  kind: KindLayoutEnum.leaf;
}

export interface GroupLayoutModel extends BaseLayoutModel {
  kind: KindLayoutEnum.group;
  children: LayoutModel[];
}

export type LayoutModel = LeafLayoutModel | GroupLayoutModel;
