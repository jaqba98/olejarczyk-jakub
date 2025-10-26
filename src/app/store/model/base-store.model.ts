import { BaseDomain } from '../../domain/model/base-domain.model';

export interface BaseStoreModel<TData, TMetadata> {
  sectionData: BaseDomain.Model<TData, TMetadata>;
}
