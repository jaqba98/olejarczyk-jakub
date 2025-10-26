import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { AboutMeStoreModel } from '../model/store/about-me-store.model';
import { AboutMeStoreState } from './about-me-store.state';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';

describe('About Me Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  afterAll(() => {});

  it('Should return the correct data', async () => {
    const correctData: AboutMeStoreModel = {
      ownSectionData: SectionDataBuilder.buildDataForKind('aboutMe'),
    };
    expect(await firstValueFrom(store.selectOnce(AboutMeStoreState.getState))).toEqual(correctData);
  });
});
