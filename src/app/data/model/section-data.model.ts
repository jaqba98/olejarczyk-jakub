import { SectionIdDataType } from '../type/id/section-id-data.type';

interface SectionModel {
  id: string;
  label: string;
}

export type SectionDataModel = Record<SectionIdDataType, SectionModel>;
