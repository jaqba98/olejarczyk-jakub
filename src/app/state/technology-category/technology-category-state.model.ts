export interface TechnologyCategoryModel {
  order: number;
}

export type TechnologyCategoryStateModel<TKey extends string> = Record<
  TKey,
  TechnologyCategoryModel
>;
