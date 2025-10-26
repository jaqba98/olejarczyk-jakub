import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { SectionDataBuilder } from '../../builder/data/section-data.builder';
import { HomeStoreModel } from '../model/store/home-store.model';
import { HomeStoreState } from './home-store.state';

describe('Home Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: HomeStoreModel = {
      ownSectionData: SectionDataBuilder.buildDataForKind('home'),
    };
    expect(await firstValueFrom(store.selectOnce(HomeStoreState.getState))).toEqual(correctData);
  });
});
