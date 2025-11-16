import { PersonalRawModel } from '../../model/raw/personal-raw.model';
import { SectionRawModel } from '../../model/raw/section-raw.model';
import { WebsiteRawModel } from '../../model/raw/website-raw.model';

export interface RawStoreModel {
  personal: PersonalRawModel;
  section: SectionRawModel;
  website: WebsiteRawModel;
}
