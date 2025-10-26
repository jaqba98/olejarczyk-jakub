interface BaseModel<TData, TMetadata> {
  data: TData;
  metadata: TMetadata;
}

export type BaseDomainModel<TKind extends string, TData, TMetadata> = Record<
  TKind,
  BaseModel<TData, TMetadata>
>;
