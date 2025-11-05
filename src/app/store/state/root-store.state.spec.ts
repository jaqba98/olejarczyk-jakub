import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { RootStoreModel } from '../model/store/root-store.model';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';
import { RootStoreState } from './root-store.state';

describe('Root Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: RootStoreModel = {
      sections: SectionDataBuilder.buildDataForAllSections(),
    };
    expect(await firstValueFrom(store.selectOnce(RootStoreState.getState))).toEqual(correctData);
  });
});
