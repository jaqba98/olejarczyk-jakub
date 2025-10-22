import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { PersonalDataDomainBuilder } from './personal-data-domain.builder';
import { StoreDomainProvider } from '../../provider/store-domain.provider';
import { PersonalDataViewDomainModel } from '../../model/view/data/personal-data-view-domain.model';
import { personalDataDomainConst } from '../../const/data/personal-data-domain.const';

describe('Personal Data Domain Builder', () => {
  let builder: PersonalDataDomainBuilder;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [StoreDomainProvider.getProvide(), PersonalDataDomainBuilder],
    });
    builder = TestBed.inject(PersonalDataDomainBuilder);
  });

  it('should return correct data', async () => {
    const correctResult: PersonalDataViewDomainModel = personalDataDomainConst;
    expect(await firstValueFrom(builder.build())).toEqual(correctResult);
  });
});
