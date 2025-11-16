import { PersonalRawModel } from '../../raw/model/personal-raw.model';
import { SectionRawModel } from '../../raw/model/section-raw.model';
import { WebsiteRawModel } from '../../raw/model/website-raw.model';

export interface RawStoreModel {
  personal: PersonalRawModel;
  section: SectionRawModel;
  website: WebsiteRawModel;
}
