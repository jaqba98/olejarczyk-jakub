type SectionContainerMaxWidthType = '100%' | '960px';

interface SectionContainerModel {
  maxWidth: SectionContainerMaxWidthType;
}

export interface SectionAppearanceModel {
  container: SectionContainerModel;
}
