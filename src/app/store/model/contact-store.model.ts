import { SectionDomain } from '../../domain/model/section-domain.model';
import { BaseStoreModel } from './base-store.model';

export interface ContactStoreModel
  extends BaseStoreModel<SectionDomain.Data, SectionDomain.Metadata> {}
