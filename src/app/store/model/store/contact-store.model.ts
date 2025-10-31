import { PersonalDataBuilderModel } from '../../../builder/model/data/personal-data-builder.model';
import { SocialMediaDataBuilderModel } from '../../../builder/model/data/social-media-data-builder.model';
import { BaseStoreModel } from '../base/base-store.model';

export interface ContactStoreModel extends BaseStoreModel {
  personalData: PersonalDataBuilderModel;
  socialMediaData: SocialMediaDataBuilderModel;
}
