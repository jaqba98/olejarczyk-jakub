import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { AboutMeStoreModel } from '../model/store/about-me-store.model';
import { AboutMeStoreState } from './about-me-store.state';
import { SectionBuilder } from '../../builder/service/section.builder';
import { AboutMeBuilder } from '../../builder/service/about-me.builder';

describe('About Me Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  afterAll(() => {});

  it('Should return the correct data', async () => {
    const result: AboutMeStoreModel = {
      ownSection: SectionBuilder.buildDataForKind('aboutMe'),
      aboutMe: AboutMeBuilder.buildData(),
    };
    expect(await firstValueFrom(store.selectOnce(AboutMeStoreState.getState))).toEqual(result);
  });
});
