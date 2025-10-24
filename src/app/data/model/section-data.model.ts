import { SectionHrefDataType } from '../type/href/section-href-data.type';
import { SectionIdDataType } from '../type/id/section-id-data.type';
import { SectionLabelDataType } from '../type/label/section-label-data.type';
import { BaseDataModel } from './base-data.model';

interface SectionModel extends BaseDataModel<SectionIdDataType> {
  label: SectionLabelDataType;
  href: SectionHrefDataType;
}

export type SectionDataModel = Record<SectionIdDataType, SectionModel>;
