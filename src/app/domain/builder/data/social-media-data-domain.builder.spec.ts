import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { StoreDomainProvider } from '../../provider/store-domain.provider';
import { SocialMediaDataDomainBuilder } from './social-media-data-domain.builder';
import { SocialMediaDataViewDomainModel } from '../../model/view/data/social-media-data-view-domain.model';
import { socialMediaDataDomainConst } from '../../const/data/social-media-data-domain.const';

describe('Social Media Data Domain Builder', () => {
  let builder: SocialMediaDataDomainBuilder;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [StoreDomainProvider.getProvide(), SocialMediaDataDomainBuilder],
    });
    builder = TestBed.inject(SocialMediaDataDomainBuilder);
  });

  it('should return correct data', async () => {
    const correctResult: SocialMediaDataViewDomainModel = socialMediaDataDomainConst;
    expect(await firstValueFrom(builder.build())).toEqual(correctResult);
  });
});
