import { SectionDataStateModel } from '../../../../data/model/section-data.model';
import { AboutMeSectionStateDomainModel } from '../../state/section/about-me-section-state-domain.model';

export interface AboutMeSectionViewDomainModel extends AboutMeSectionStateDomainModel {
  sectionData: SectionDataStateModel;
}
