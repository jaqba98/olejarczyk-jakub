import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { HomeStoreModel } from '../model/store/home-store.model';
import { HomeStoreState } from './home-store.state';
import { SectionBuilder } from '../../builder/service/section.builder';
import { PersonalBuilder } from '../../builder/service/personal.builder';
import { SocialMediaBuilder } from '../../builder/service/social-media.builder';
import { HomeBuilder } from '../../builder/service/home.builder';

describe('Home Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const result: HomeStoreModel = {
      ownSection: SectionBuilder.buildDataForKind('home'),
      personal: PersonalBuilder.buildData(),
      socialMedia: SocialMediaBuilder.buildData(),
      home: HomeBuilder.buildData(),
    };
    expect(await firstValueFrom(store.selectOnce(HomeStoreState.getState))).toEqual(result);
  });
});
