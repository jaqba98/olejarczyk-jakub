type SectionContainerMaxWidth = '100%' | '960px';

interface SectionTitleMetadataModel {
  visible: boolean;
}

interface SectionContainerMetadataModel {
  maxWidth: SectionContainerMaxWidth;
}

export interface SectionMetadataModel {
  title: SectionTitleMetadataModel;
  container: SectionContainerMetadataModel;
}
