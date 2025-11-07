import { BaseDataModel } from '../../model/base/base-data.model';
import { FooterFieldDataType } from '../../type/field/footer-field-data.type';

export const footerDataConst: BaseDataModel<FooterFieldDataType> = {
  field: {
    rightsDescription: {
      kind: 'string',
      value: 'All rights reserved.',
    },
  },
};
