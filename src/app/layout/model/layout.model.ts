import { DomainModel } from '../../domain/model/domain/domain.model';
import { KindLayoutType } from '../type/kind-layout.type';

interface BaseLayoutModel<TKind extends KindLayoutType> {
  kind: TKind;
}

export interface LeafLayoutModel extends BaseLayoutModel<'leaf'> {
  domain: DomainModel;
}

export interface GroupLayoutModel extends BaseLayoutModel<'group'> {
  children: LayoutModel[];
}

export type LayoutModel = LeafLayoutModel | GroupLayoutModel;
