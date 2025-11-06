import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { RootStoreModel } from '../model/store/root-store.model';
import { RootStoreState } from './root-store.state';
import { SectionBuilder } from '../../builder/service/section.builder';

describe('Root Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const result: RootStoreModel = {
      sections: SectionBuilder.buildDataForAllSections(),
    };
    expect(await firstValueFrom(store.selectOnce(RootStoreState.getState))).toEqual(result);
  });
});
