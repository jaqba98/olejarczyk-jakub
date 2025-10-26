import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { SectionDataBuilder } from '../../builder/data/section-data.builder';
import { NavStoreModel } from '../model/store/nav-store.model';
import { NavStoreState } from './nav-store.state';
import { PersonalDataBuilder } from '../../builder/data/personal-data.builder';

describe('Nav Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: NavStoreModel = {
      ownSectionData: SectionDataBuilder.buildDataForKind('nav'),
      personalData: PersonalDataBuilder.buildData(),
      routableSections: SectionDataBuilder.buildDataForRoutableSections(),
    };
    expect(await firstValueFrom(store.selectOnce(NavStoreState.getState))).toEqual(correctData);
  });
});
