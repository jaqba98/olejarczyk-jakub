export interface TechnologyGroupModel {
  order: number;
}

export type TechnologyGroupStateModel<TKey extends string> = Record<TKey, TechnologyGroupModel>;
