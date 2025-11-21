import { CopyrightMapperModel } from '../mapper/copyright-mapper.model';
import { DescriptionMapperModel } from '../mapper/description-mapper.model';
import { SectionMapperModel } from '../mapper/section-mapper.model';

export interface MapperStateModel {
  copyright: CopyrightMapperModel;
  description: DescriptionMapperModel;
  section: SectionMapperModel;
}
