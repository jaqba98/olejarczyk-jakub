import { ParagraphMetadataModel } from '../metadata/paragraph-metadata.model';
import { SectionMetadataModel } from '../metadata/section-metadata.model';
import { TechnologiesMetadataModel } from '../metadata/technologies-metadata.model';

export interface MetadataStateModel {
  copyright: ParagraphMetadataModel;
  section: SectionMetadataModel;
  technologies: TechnologiesMetadataModel;
  aboutMe: ParagraphMetadataModel;
}
