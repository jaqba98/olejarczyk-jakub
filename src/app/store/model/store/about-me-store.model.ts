import { AboutMeDataBuilderModel } from '../../../builder/model/data/about-me-data-builder.model';
import { BaseStoreModel } from '../base/base-store.model';

export interface AboutMeStoreModel extends BaseStoreModel {
  aboutMeData: AboutMeDataBuilderModel;
}
