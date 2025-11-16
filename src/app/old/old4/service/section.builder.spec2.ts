// import _ from 'lodash';

// import { sectionDomainConst } from '../../domain/const/section-domain.const';
// import { SectionKindDomainType } from '../../domain/type/kind/section-kind-domain.type';
// import { SectionBuilderModel, SectionsBuilderModel } from '../model/builder/section-builder.model';
// import { SectionBuilder } from './section.builder';

// describe('Section Builder', () => {
//   it('Should return the correct data', () => {
//     const result: SectionBuilderModel = { ...sectionDomainConst.home, extend: {} };
//     expect(SectionBuilder.buildDataForKind('home')).toEqual(result);
//   });

//   it('Should not return the wrong data', () => {
//     const result: SectionBuilderModel = { ...sectionDomainConst.home, extend: {} };
//     expect(SectionBuilder.buildDataForKind('aboutMe')).not.toEqual(result);
//   });

//   it('Should throw an error when kind does not exist', () => {
//     expect(() => SectionBuilder.buildDataForKind(<SectionKindDomainType>'hello')).toThrow(
//       'The hello does not exist in the sectionDomainConst!',
//     );
//   });

//   it('Should return only routable sections', () => {
//     const input = SectionBuilder.buildDataForRoutableSections();
//     const output: SectionsBuilderModel = [
//       { ...sectionDomainConst.home, extend: {} },
//       { ...sectionDomainConst.aboutMe, extend: {} },
//       { ...sectionDomainConst.technology, extend: {} },
//       { ...sectionDomainConst.skill, extend: {} },
//       { ...sectionDomainConst.experience, extend: {} },
//       { ...sectionDomainConst.resume, extend: {} },
//       { ...sectionDomainConst.education, extend: {} },
//       { ...sectionDomainConst.project, extend: {} },
//       { ...sectionDomainConst.contact, extend: {} },
//     ];
//     expect(_.isEqual(input, output)).toBeTruthy();
//   });

//   it('Should return all sections', () => {
//     const input = SectionBuilder.buildDataForAllSections();
//     const output: SectionsBuilderModel = [
//       { ...sectionDomainConst.nav, extend: {} },
//       { ...sectionDomainConst.home, extend: {} },
//       { ...sectionDomainConst.aboutMe, extend: {} },
//       { ...sectionDomainConst.technology, extend: {} },
//       { ...sectionDomainConst.skill, extend: {} },
//       { ...sectionDomainConst.experience, extend: {} },
//       { ...sectionDomainConst.resume, extend: {} },
//       { ...sectionDomainConst.education, extend: {} },
//       { ...sectionDomainConst.project, extend: {} },
//       { ...sectionDomainConst.contact, extend: {} },
//       { ...sectionDomainConst.footer, extend: {} },
//     ];
//     expect(_.isEqual(input, output)).toBeTruthy();
//   });
// });
