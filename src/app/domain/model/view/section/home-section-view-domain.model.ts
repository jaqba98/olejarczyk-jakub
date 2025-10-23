import { PersonalDataStateDomainModel } from '../../state/data/personal-data-state-domain.model';
import { HomeSectionStateDomainModel } from '../../state/section/home-section-state-domain.model';

export interface HomeSectionViewDomainModel {
  homeSection: HomeSectionStateDomainModel;
  personalData: PersonalDataStateDomainModel;
}
