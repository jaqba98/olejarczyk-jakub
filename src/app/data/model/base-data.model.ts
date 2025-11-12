import { KindDataType } from '../type/kind-data.type';

export interface BaseDataModel<TKind extends KindDataType> {
  kind: TKind;
}
