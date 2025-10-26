export namespace BaseDomain {
  export interface Model<TData, TMetadata> {
    data: TData;
    metadata: TMetadata;
  }

  export type Type<TKind extends string, TData, TMetadata> = Record<TKind, Model<TData, TMetadata>>;
}
