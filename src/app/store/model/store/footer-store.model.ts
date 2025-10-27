import { FooterDataBuilderModel } from '../../../builder/model/data/footer-data-builder.model';
import { PersonalDataBuilderModel } from '../../../builder/model/data/personal-data-builder.model';
import { BaseStoreModel } from '../base/base-store.model';

export interface FooterStoreModel extends BaseStoreModel {
  personalData: PersonalDataBuilderModel;
  footerData: FooterDataBuilderModel;
}
