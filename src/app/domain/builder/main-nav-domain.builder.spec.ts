import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { StoreDomainProvider } from '../provider/store-domain.provider';
import { MainNavDomainBuilder } from './main-nav-domain.builder';
import { MainNavViewDomainModel } from '../model/view/main-nav-view-domain.model';
import { mainNavDataDomainConst } from '../const/data/main-nav-data-domain.const';

describe('Main Nav Domain Builder', () => {
  let builder: MainNavDomainBuilder;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [StoreDomainProvider.getProvide(), MainNavDomainBuilder],
    });
    builder = TestBed.inject(MainNavDomainBuilder);
  });

  it('should return correct data', async () => {
    const correctResult: MainNavViewDomainModel = mainNavDataDomainConst;
    expect(await firstValueFrom(builder.build())).toEqual(correctResult);
  });
});
