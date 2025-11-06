export interface BaseBuilderModel<TData, TMetadata, TExtend = {}> {
  data: TData;
  metadata: TMetadata;
  extend: TExtend;
}

export type BaseBuilderArrayModel<TData, TMetadata, TExtend = {}> = BaseBuilderModel<
  TData,
  TMetadata,
  TExtend
>[];
