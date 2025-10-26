import { SectionKindDomainType } from '../../domain/type/kind/section-kind-domain.type';
import { SectionDomainFinder } from './section-domain.finder';

describe('Section Domain Finder', () => {
  it('Should return the correct data', () => {
    expect(SectionDomainFinder.findByKind('home')).toEqual({
      data: {
        id: 'home',
        label: 'Home',
        href: '#home',
      },
      metadata: {
        routable: true,
      },
    });
  });

  it('Should not return the wrong data', () => {
    expect(SectionDomainFinder.findByKind('home')).not.toEqual({
      data: {
        id: 'nav',
        label: 'Nav',
        href: '#nav',
      },
      metadata: {
        routable: false,
      },
    });
  });

  it('Should throw an error when kind does not exist', () => {
    expect(() => SectionDomainFinder.findByKind(<SectionKindDomainType>'hello')).toThrow(
      'The hello does not exist in the sectionDomainConst!',
    );
  });
});
