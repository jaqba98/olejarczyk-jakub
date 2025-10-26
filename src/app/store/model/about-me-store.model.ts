import { SectionDomain } from '../../domain/model/section-domain.model';
import { BaseStoreModel } from './base-store.model';

export interface AboutMeStoreModel
  extends BaseStoreModel<SectionDomain.Data, SectionDomain.Metadata> {}
