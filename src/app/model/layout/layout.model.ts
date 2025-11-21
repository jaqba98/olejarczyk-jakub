import { LayoutKindType } from '../../type/kind/layout-kind.type';
import { ComponentModel } from './component.model';

interface BaseLayoutModel<TKind extends LayoutKindType> {
  kind: TKind;
}

export interface LeafLayoutModel extends BaseLayoutModel<'leaf'> {
  component: ComponentModel;
}

export interface GroupLayoutModel extends BaseLayoutModel<'group'> {
  component?: ComponentModel;
  children: LayoutModel[];
}

export type LayoutModel = LeafLayoutModel | GroupLayoutModel;
