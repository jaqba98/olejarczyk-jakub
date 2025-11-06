import { AboutMeBuilderModel } from '../../../builder/model/builder/about-me-builder.model';
import { BaseStoreModel } from '../base/base-store.model';

export interface AboutMeStoreModel extends BaseStoreModel {
  aboutMe: AboutMeBuilderModel;
}
