type SectionContainerMaxWidthType = 'full' | '960px';

type SectionRootPaddingType = 'normal' | 'big';

interface SectionContainerModel {
  maxWidth: SectionContainerMaxWidthType;
}

interface SectionRootModel {
  padding: SectionRootPaddingType;
}

export interface SectionAppearanceModel {
  container: SectionContainerModel;
  root: SectionRootModel;
}
