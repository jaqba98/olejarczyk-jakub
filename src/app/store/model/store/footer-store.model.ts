import { ConfigDataBuilderModel } from '../../../builder/model/data/config-data-builder.model';
import { PersonalDataBuilderModel } from '../../../builder/model/data/personal-data-builder.model';
import { BaseStoreModel } from '../base/base-store.model';

export interface FooterStoreModel extends BaseStoreModel {
  personalData: PersonalDataBuilderModel;
  configData: ConfigDataBuilderModel;
}
