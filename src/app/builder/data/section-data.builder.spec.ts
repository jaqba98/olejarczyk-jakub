import _ from 'lodash';

import { sectionDomainConst } from '../../domain/const/section-domain.const';
import { SectionKindDomainType } from '../../domain/type/kind/section-kind-domain.type';
import {
  SectionDataBuilderModel,
  SectionsDataBuilderModel,
} from '../model/data/section-data-builder.model';
import { SectionDataBuilder } from './section-data.builder';

describe('Section Data Builder', () => {
  it('Should return the correct data', () => {
    const correctData: SectionDataBuilderModel = sectionDomainConst.home.data;
    expect(SectionDataBuilder.buildDataForKind('home')).toEqual(correctData);
  });

  it('Should not return the wrong data', () => {
    const wrongData: SectionDataBuilderModel = sectionDomainConst.home.data;
    expect(SectionDataBuilder.buildDataForKind('aboutMe')).not.toEqual(wrongData);
  });

  it('Should throw an error when kind does not exist', () => {
    expect(() => SectionDataBuilder.buildDataForKind(<SectionKindDomainType>'hello')).toThrow(
      'The hello does not exist in the sectionDomainConst!',
    );
  });

  it('Should return only routable sections', () => {
    const inputData = SectionDataBuilder.buildDataForRoutableSections();
    const outputData: SectionsDataBuilderModel = [
      sectionDomainConst.home.data,
      sectionDomainConst.aboutMe.data,
      sectionDomainConst.technology.data,
      sectionDomainConst.skill.data,
      sectionDomainConst.experience.data,
      sectionDomainConst.resume.data,
      sectionDomainConst.education.data,
      sectionDomainConst.project.data,
      sectionDomainConst.contact.data,
    ];
    expect(_.isEqual(inputData, outputData)).toBeTruthy();
  });

  it('Should return all sections', () => {
    const inputData = SectionDataBuilder.buildDataForAllSections();
    const outputData: SectionsDataBuilderModel = [
      sectionDomainConst.nav.data,
      sectionDomainConst.home.data,
      sectionDomainConst.aboutMe.data,
      sectionDomainConst.technology.data,
      sectionDomainConst.skill.data,
      sectionDomainConst.experience.data,
      sectionDomainConst.resume.data,
      sectionDomainConst.education.data,
      sectionDomainConst.project.data,
      sectionDomainConst.contact.data,
      sectionDomainConst.footer.data,
    ];
    expect(_.isEqual(inputData, outputData)).toBeTruthy();
  });
});
