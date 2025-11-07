import { SectionDataType } from '../type/section-data.type';

interface SectionModel {
  id: string;
  label: string;
  href: string;
}

export type SectionDataModel = Record<SectionDataType, SectionModel>;
