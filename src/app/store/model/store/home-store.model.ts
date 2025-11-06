import { HomeBuilderModel } from '../../../builder/model/builder/home-builder.model';
import { PersonalBuilderModel } from '../../../builder/model/builder/personal-builder.model';
import { SocialMediaBuilderModel } from '../../../builder/model/builder/social-media-builder.model';
import { BaseStoreModel } from '../base/base-store.model';

export interface HomeStoreModel extends BaseStoreModel {
  personalBuilder: PersonalBuilderModel;
  socialMediaBuilder: SocialMediaBuilderModel;
  homeBuilder: HomeBuilderModel;
}
