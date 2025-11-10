import { DataModel } from '../../data/model/data.model';
import { KindLayoutEnum } from '../enum/kind-layout.enum';

interface BaseLayoutModel {
  data: DataModel;
}

interface LeafLayoutModel extends BaseLayoutModel {
  kind: KindLayoutEnum.leaf;
}

interface GroupLayoutModel extends BaseLayoutModel {
  kind: KindLayoutEnum.group;
  children: LayoutModel[];
}

export type LayoutModel = LeafLayoutModel | GroupLayoutModel;
