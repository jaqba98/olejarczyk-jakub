import { PersonalDataStateDomainModel } from '../../../../data/model/personal-data.model';
import { SectionDataStateModel } from '../../state/data/section-data-state-domain.model';
import { SocialMediaDataStateDomainModel } from '../../state/data/social-media-data-state-domain.model';
import { HomeSectionStateDomainModel } from '../../state/section/home-section-state-domain.model';

export interface HomeSectionViewDomainModel extends HomeSectionStateDomainModel {
  sectionData: SectionDataStateModel;
  personalData: PersonalDataStateDomainModel;
  socialMediaData: SocialMediaDataStateDomainModel;
}
