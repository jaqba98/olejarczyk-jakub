import { SectionDataBuilderModel } from '../../../builder/model/data/section-data-builder.model';

export interface BaseStoreModel {
  ownSectionData: SectionDataBuilderModel;
  routableSections: SectionDataBuilderModel[];
}
