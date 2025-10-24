import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { NavSectionDomainBuilder } from './nav-section-domain.builder';
import { StoreDomainProvider } from '../../provider/store-domain.provider';
import { NavSectionViewDomainModel } from '../../model/view/section/nav-section-view-domain.model';
import { navSectionDomainConst } from '../../const/section/nav-section-domain.const';
import { personalDataDomainConst } from '../../../data/const/personal-data.const';
import { sectionDataDomainConst } from '../../../data/const/section-data.const';

describe('Nav Section Domain Builder', () => {
  let builder: NavSectionDomainBuilder;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [StoreDomainProvider.getProvide(), NavSectionDomainBuilder],
    });
    builder = TestBed.inject(NavSectionDomainBuilder);
  });

  it('should return correct data', async () => {
    const correctResult: NavSectionViewDomainModel = {
      sectionData: sectionDataDomainConst.nav,
      personalData: personalDataDomainConst,
      options: [
        {
          ...navSectionDomainConst.options.home,
          sectionData: sectionDataDomainConst.home,
        },
        {
          ...navSectionDomainConst.options.aboutMe,
          sectionData: sectionDataDomainConst.aboutMe,
        },
        {
          ...navSectionDomainConst.options.technology,
          sectionData: sectionDataDomainConst.technology,
        },
      ],
    };
    expect(await firstValueFrom(builder.build())).toEqual(correctResult);
  });
});
