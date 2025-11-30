import { LayoutKindType } from '../../type/kind/layout-kind.type';
import { ComponentModel } from './component.model';

interface BaseLayoutModel<TKind extends LayoutKindType> {
  kind: TKind;
}

export interface LayoutLeafModel extends BaseLayoutModel<'leaf'> {
  component: ComponentModel;
}

export interface LayoutGroupModel extends BaseLayoutModel<'group'> {
  component?: ComponentModel;
  children: LayoutModel[];
}

export type LayoutModel = LayoutLeafModel | LayoutGroupModel;
