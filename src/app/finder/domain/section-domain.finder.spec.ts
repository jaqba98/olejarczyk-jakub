import { BaseDomain } from '../../domain/model/base-domain.model';
import { SectionDomain } from '../../domain/model/section-domain.model';
import { SectionKindDomainType } from '../../domain/type/kind/section-kind-domain.type';
import { SectionDomainFinder } from './section-domain.finder';

describe('Section Domain Finder', () => {
  it('Should return the correct data', () => {
    const correctData: BaseDomain.Model<SectionDomain.Data, SectionDomain.Metadata> = {
      data: {
        id: 'home',
        label: 'Home',
        href: '#home',
      },
      metadata: {
        routable: true,
      },
    };
    expect(SectionDomainFinder.findByKind('home')).toEqual(correctData);
  });

  it('Should not return the wrong data', () => {
    const wrongData: BaseDomain.Model<SectionDomain.Data, SectionDomain.Metadata> = {
      data: {
        id: 'nav',
        label: 'Nav',
        href: '#nav',
      },
      metadata: {
        routable: false,
      },
    };
    expect(SectionDomainFinder.findByKind('home')).not.toEqual(wrongData);
  });

  it('Should throw an error when kind does not exist', () => {
    expect(() => SectionDomainFinder.findByKind(<SectionKindDomainType>'hello')).toThrow(
      'The hello does not exist in the sectionDomainConst!',
    );
  });
});
