import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';
import { NavStoreModel } from '../model/nav-store.model';
import { NavStoreState } from './nav-store.state';
import { PersonalDomainFinder } from '../../finder/domain/personal-domain.finder';

describe('Nav Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: NavStoreModel = {
      sectionData: SectionDomainFinder.findDataByKind('nav'),
      personalData: PersonalDomainFinder.findData(),
    };
    expect(await firstValueFrom(store.selectOnce(NavStoreState.getState))).toEqual(correctData);
  });
});
