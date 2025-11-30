import { PersonalRawModel } from '../raw/personal-raw.model';
import { SectionRawModel } from '../raw/section-raw.model';
import { TechnologyCategoryRawModel } from '../raw/technology-category-raw.model';
import { TechnologyRawModel } from '../raw/technology-raw.model';
import { WebsiteRawModel } from '../raw/website-raw.model';

export interface RawStateModel {
  personal: PersonalRawModel;
  section: SectionRawModel;
  technologyCategory: TechnologyCategoryRawModel;
  technology: TechnologyRawModel;
  website: WebsiteRawModel;
}
