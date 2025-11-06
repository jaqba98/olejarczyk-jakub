import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { NavStoreModel } from '../model/store/nav-store.model';
import { NavStoreState } from './nav-store.state';
import { SectionBuilder } from '../../builder/service/section.builder';
import { PersonalBuilder } from '../../builder/service/personal.builder';

describe('Nav Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const result: NavStoreModel = {
      ownSection: SectionBuilder.buildDataForKind('nav'),
      personal: PersonalBuilder.buildData(),
      sections: SectionBuilder.buildDataForRoutableSections(),
    };
    expect(await firstValueFrom(store.selectOnce(NavStoreState.getState))).toEqual(result);
  });
});
