import { PersonalBuilderModel } from '../../../builder/model/builder/personal-builder.model';
import { SocialMediaBuilderModel } from '../../../builder/model/builder/social-media-builder.model';
import { BaseStoreModel } from '../base/base-store.model';

export interface ContactStoreModel extends BaseStoreModel {
  personalBuilder: PersonalBuilderModel;
  socialMediaBuilder: SocialMediaBuilderModel;
}
