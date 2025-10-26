import { PersonalDataStateDomainModel } from '../../../../../model/personal-data.model';
import { SectionDataStateModel } from '../../../../../model/section-data.model';
import { SocialMediaDataStateDomainModel } from '../../../../domain/model/social-media-domain.model';
import { HomeSectionStateDomainModel } from '../../state/section/home-section-state-domain.model';

export interface HomeSectionViewDomainModel extends HomeSectionStateDomainModel {
  sectionData: SectionDataStateModel;
  personalData: PersonalDataStateDomainModel;
  socialMediaData: SocialMediaDataStateDomainModel;
}
