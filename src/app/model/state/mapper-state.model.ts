import { CopyrightMapperModel } from '../mapper/copyright-mapper.model';
import { SectionMapperModel } from '../mapper/section-mapper.model';

export interface MapperStateModel {
  copyright: CopyrightMapperModel;
  section: SectionMapperModel;
}
