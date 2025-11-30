import { ParagraphMetadataModel } from '../metadata/paragraph-metadata.model';
import { SectionMetadataModel } from '../metadata/section-metadata.model';
import { TechnologyMetadataModel } from '../metadata/technology-metadata.model';

export interface MetadataStateModel {
  copyright: ParagraphMetadataModel;
  description: ParagraphMetadataModel;
  section: SectionMetadataModel;
  technology: TechnologyMetadataModel;
}
