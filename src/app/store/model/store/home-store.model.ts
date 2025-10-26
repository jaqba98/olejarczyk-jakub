import { PersonalDataBuilderModel } from '../../../builder/model/data/personal-data-builder.model';
import { SocialMediaDataBuilderModel } from '../../../builder/model/data/social-media-data-builder.model';
import { BaseStoreModel } from '../base/base-store.model';

export interface HomeStoreModel extends BaseStoreModel {
  personalData: PersonalDataBuilderModel;
  socialMediaDatas: SocialMediaDataBuilderModel[];
}
