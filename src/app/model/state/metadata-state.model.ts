import { ParagraphMetadataModel } from '../metadata/paragraph-metadata.model';
import { SectionMetadataModel } from '../metadata/section-metadata.model';

export interface MetadataStateModel {
  copyright: ParagraphMetadataModel;
  section: SectionMetadataModel;
}
