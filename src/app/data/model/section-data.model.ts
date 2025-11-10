import { KindDataEnum } from '../enum/kind-data.enum';

export interface SectionDataModel {
  kind: KindDataEnum.section;
  id: string;
  label: string;
  href: string;
}
