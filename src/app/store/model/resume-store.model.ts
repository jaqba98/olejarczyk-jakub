import { SectionDomain } from '../../domain/model/section-domain.model';
import { BaseStoreModel } from './base-store.model';

export interface ResumeStoreModel
  extends BaseStoreModel<SectionDomain.Data, SectionDomain.Metadata> {}
