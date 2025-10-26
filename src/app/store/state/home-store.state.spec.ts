import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';
import { HomeStoreModel } from '../model/home-store.model';
import { HomeStoreState } from './home-store.state';

describe('Home Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: HomeStoreModel = {
      sectionData: SectionDomainFinder.findDataByKind('home'),
    };
    expect(await firstValueFrom(store.selectOnce(HomeStoreState.getState))).toEqual(correctData);
  });
});
