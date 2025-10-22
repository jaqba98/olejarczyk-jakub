import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { SectionDataDomainBuilder } from './section-data-domain.builder';
import { StoreDomainProvider } from '../../provider/store-domain.provider';
import { SectionDataViewDomainModel } from '../../model/view/data/section-data-view-domain.model';
import { sectionDataDomainConst } from '../../const/data/section-data-domain.const';

describe('Section Data Domain Builder', () => {
  let builder: SectionDataDomainBuilder;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [StoreDomainProvider.getProvide(), SectionDataDomainBuilder],
    });
    builder = TestBed.inject(SectionDataDomainBuilder);
  });

  it('should return correct data', async () => {
    const correctResult: SectionDataViewDomainModel = sectionDataDomainConst;
    expect(await firstValueFrom(builder.build())).toEqual(correctResult);
  });
});
