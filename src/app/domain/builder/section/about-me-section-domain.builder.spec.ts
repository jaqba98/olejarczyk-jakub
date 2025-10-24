import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { StoreDomainProvider } from '../../provider/store-domain.provider';
import { sectionDataDomainConst } from '../../const/data/section-data-domain.const';
import { AboutMeSectionDomainBuilder } from './about-me-section-domain.builder';
import { AboutMeSectionViewDomainModel } from '../../model/view/section/about-me-section-view-domain.model';
import { aboutMeSectionDataDomainConst } from '../../const/section/about-me-section-domain.const';

describe('About Me Section Domain Builder', () => {
  let builder: AboutMeSectionDomainBuilder;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [StoreDomainProvider.getProvide(), AboutMeSectionDomainBuilder],
    });
    builder = TestBed.inject(AboutMeSectionDomainBuilder);
  });

  it('should return correct data', async () => {
    const correctResult: AboutMeSectionViewDomainModel = {
      ...aboutMeSectionDataDomainConst,
      sectionData: sectionDataDomainConst.aboutMe,
    };
    expect(await firstValueFrom(builder.build())).toEqual(correctResult);
  });
});
