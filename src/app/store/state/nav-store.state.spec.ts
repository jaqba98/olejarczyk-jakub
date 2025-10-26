import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';
import { NavStoreModel } from '../model/nav-store.model';
import { NavStoreState } from './nav-store.state';

describe('Nav Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: NavStoreModel = {
      sectionData: SectionDomainFinder.findByKind('nav'),
    };
    expect(await firstValueFrom(store.selectOnce(NavStoreState.getState))).toEqual(correctData);
  });
});
