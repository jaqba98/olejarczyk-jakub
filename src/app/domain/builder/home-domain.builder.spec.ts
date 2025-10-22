import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { HomeDomainBuilder } from './home-domain.builder';
import { StoreDomainProvider } from '../provider/store-domain.provider';
import { HomeViewDomainModel } from '../model/view/home-view-domain.model';
import { homeDataDomainConst } from '../const/data/greeting-data-domain.const';

describe('Home Domain Builder', () => {
  let builder: HomeDomainBuilder;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [StoreDomainProvider.getProvide(), HomeDomainBuilder],
    });
    builder = TestBed.inject(HomeDomainBuilder);
  });

  it('should return correct data', async () => {
    const correctResult: HomeViewDomainModel = homeDataDomainConst;
    expect(await firstValueFrom(builder.build())).toEqual(correctResult);
  });
});
