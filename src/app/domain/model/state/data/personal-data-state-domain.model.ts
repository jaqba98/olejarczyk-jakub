import { ImageAssetDomainType } from '../../../type/asset/image-asset-domain.type';
import { ExperienceTitleDomainType } from '../../../type/title/experience-title-domain.type';

export interface PersonalDataStateDomainModel {
  firstName: string;
  lastName: string;
  profileImage: ImageAssetDomainType;
  experienceTitles: ExperienceTitleDomainType[];
}
