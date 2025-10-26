import { sectionDomainConst } from '../../domain/const/section-domain.const';
import { SectionKindDomainType } from '../../domain/type/kind/section-kind-domain.type';
import { SectionDataModel } from '../model/data/section-data.model';
import { SectionDomainFinder } from './section-domain.finder';

describe('Section Domain Finder', () => {
  it('Should return the correct data', () => {
    const correctData: SectionDataModel = sectionDomainConst.home.data;
    expect(SectionDomainFinder.findDataByKind('home')).toEqual(correctData);
  });

  it('Should not return the wrong data', () => {
    const wrongData: SectionDataModel = sectionDomainConst.home.data;
    expect(SectionDomainFinder.findDataByKind('aboutMe')).not.toEqual(wrongData);
  });

  it('Should throw an error when kind does not exist', () => {
    expect(() => SectionDomainFinder.findDataByKind(<SectionKindDomainType>'hello')).toThrow(
      'The hello does not exist in the sectionDomainConst!',
    );
  });
});
