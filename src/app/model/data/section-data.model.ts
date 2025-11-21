import { SectionKindType } from '../../type/kind/section-kind.type';
import { SectionRawItemModel } from '../raw/section-raw.model';

export interface SectionDataItemModel extends Pick<SectionRawItemModel, 'id' | 'label'> {}

export type SectionDataModel = Record<SectionKindType, SectionDataItemModel>;
