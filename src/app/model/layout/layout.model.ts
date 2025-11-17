import { GroupModeKindType } from '../../type/kind/group-mode-kind.type';
import { LayoutKindType } from '../../type/kind/layout-kind.type';
import { DomainModel } from '../domain/domain/domain.model';

interface BaseLayoutModel<TKind extends LayoutKindType> {
  kind: TKind;
}

export interface LeafLayoutModel extends BaseLayoutModel<'leaf'> {
  domain: DomainModel;
}

export interface GroupLayoutModel extends BaseLayoutModel<'group'> {
  children: LayoutModel[];
  domain?: DomainModel;
  mode: GroupModeKindType;
}

export type LayoutModel = LeafLayoutModel | GroupLayoutModel;
