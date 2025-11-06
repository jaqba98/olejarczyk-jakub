import { SectionDomain } from '../../../domain/model/domain/section-domain.model';
import { BaseBuilderArrayModel, BaseBuilderModel } from '../base/base-builder.model';

export type SectionBuilderModel = BaseBuilderModel<SectionDomain.Data, SectionDomain.Metadata>;

export type SectionsBuilderModel = BaseBuilderArrayModel<
  SectionDomain.Data,
  SectionDomain.Metadata
>;
