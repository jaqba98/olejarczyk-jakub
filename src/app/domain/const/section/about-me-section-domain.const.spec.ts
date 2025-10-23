import { AboutMeSectionStateDomainModel } from '../../model/state/section/about-me-section-state-domain.model';
import { aboutMeSectionDataDomainConst } from './about-me-section-domain.const';

describe('About Me Section Domain Const', () => {
  it('should return correct data', () => {
    const correctResult: AboutMeSectionStateDomainModel = {
      // TODO: Add real description
      descriptions: ['Lorem ipsum 1', 'Lorem ipsum 2', 'Lorem ipsum 3'],
    };
    expect(aboutMeSectionDataDomainConst).toEqual(correctResult);
  });
});
