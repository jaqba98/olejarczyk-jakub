import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { HomeSectionDomainBuilder } from './home-section-domain.builder';
import { StoreDomainProvider } from '../../provider/store-domain.provider';
import { HomeSectionViewDomainModel } from '../../model/view/section/home-section-view-domain.model';
import { homeSectionDataDomainConst } from '../../const/section/home-section-domain.const';
import { personalDataDomainConst } from '../../const/data/personal-data-domain.const';
import { sectionDataDomainConst } from '../../const/data/section-data-domain.const';

describe('Home Section Domain Builder', () => {
  let builder: HomeSectionDomainBuilder;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [StoreDomainProvider.getProvide(), HomeSectionDomainBuilder],
    });
    builder = TestBed.inject(HomeSectionDomainBuilder);
  });

  it('should return correct data', async () => {
    const correctResult: HomeSectionViewDomainModel = {
      homeSection: homeSectionDataDomainConst,
      personalData: personalDataDomainConst,
      sectionData: sectionDataDomainConst.home,
    };
    expect(await firstValueFrom(builder.build())).toEqual(correctResult);
  });
});
