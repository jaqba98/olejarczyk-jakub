import { PersonalDataBuilderModel } from '../../../builder/model/data/personal-data-builder.model';
import { SectionDataBuilderModel } from '../../../builder/model/data/section-data-builder.model';
import { BaseStoreModel } from '../base/base-store.model';

export interface NavStoreModel extends BaseStoreModel {
  personalData: PersonalDataBuilderModel;
  routableSections: SectionDataBuilderModel[];
}
