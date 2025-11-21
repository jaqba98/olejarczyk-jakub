import { AboutMeMapperModel } from '../mapper/about-me-mapper.model';
import { CopyrightMapperModel } from '../mapper/copyright-mapper.model';
import { SectionMapperModel } from '../mapper/section-mapper.model';

export interface MapperStateModel {
  copyright: CopyrightMapperModel;
  section: SectionMapperModel;
  aboutMe: AboutMeMapperModel;
}
