import { BaseDataModel } from './base-data.model';

export interface SectionDataModel extends BaseDataModel<'section'> {
  id: string;
  label: string;
  href: string;
}
