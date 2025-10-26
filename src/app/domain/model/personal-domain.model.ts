import { ImageAssetDomainType } from '../type/asset/image-asset-domain.type';
import { FirstNameDomainType } from '../type/name/first-name-domain.type';
import { LastNameDomainType } from '../type/name/last-name-domain.type';
import { ExperienceTitleDomainType } from '../type/title/experience-title-domain.type';

export namespace PersonalDomain {
  export interface Data {
    firstName: FirstNameDomainType;
    lastName: LastNameDomainType;
    experienceTitles: ExperienceTitleDomainType[];
    profileImage: ImageAssetDomainType;
  }

  export interface Metadata {}
}
