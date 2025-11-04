import _ from 'lodash';

import { EducationDataBuilder } from './education-data.builder';
import { EducationDataBuilderModel } from '../model/data/education-data-builder.model';
import { educationDomainConst } from '../../domain/const/education-domain.const';

describe('Education Data Builder', () => {
  it('Should return the correct data', () => {
    const inputTechnology = EducationDataBuilder.buildData();
    const resultTechnology: EducationDataBuilderModel = {
      educations: [educationDomainConst.ujk.data],
    };
    expect(_.isEqual(inputTechnology, resultTechnology)).toBeTruthy();
  });
});
