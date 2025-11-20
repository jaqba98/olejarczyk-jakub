import { ParagraphMetadataModel } from '../metadata/paragraph-metadata.model';
import { SectionMetadataModel } from '../metadata/section-metadata.model';
import { TechnologiesMetadataModel } from '../metadata/technologies-metadata.model';
import { TechnologyCategoryMetadataModel } from '../metadata/technology-category-metadata.model';
import { TechnologyMetadataModel } from '../metadata/technology-metadata.model';

export interface MetadataStateModel {
  copyright: ParagraphMetadataModel;
  section: SectionMetadataModel;
  technologyCategory: TechnologyCategoryMetadataModel;
  technology: TechnologyMetadataModel;
  technologies: TechnologiesMetadataModel;
}
