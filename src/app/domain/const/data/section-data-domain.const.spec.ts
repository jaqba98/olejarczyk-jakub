import { SectionDataStateDomainModel } from '../../model/state/data/section-data-state-domain.model';
import { sectionDataDomainConst } from './section-data-domain.const';

describe('Section Data Domain Const', () => {
  it('should return correct data', () => {
    const correctResult: SectionDataStateDomainModel = {
      nav: {
        id: 'nav',
        label: 'Nav',
        href: '#nav',
      },
      home: {
        id: 'home',
        label: 'Home',
        href: '#home',
      },
      aboutMe: {
        id: 'aboutMe',
        label: 'About me',
        href: '#about-me',
      },
      technology: {
        id: 'technology',
        label: 'Technology',
        href: '#technology',
      },
    };
    expect(sectionDataDomainConst).toEqual(correctResult);
  });
});
