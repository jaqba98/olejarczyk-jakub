import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { AboutMeStoreModel } from '../model/about-me-store.model';
import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';
import { AboutMeStoreState } from './about-me-store.state';

describe('About Me Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  afterAll(() => {});

  it('Should return the correct data', async () => {
    const correctData: AboutMeStoreModel = {
      sectionData: SectionDomainFinder.findByKind('aboutMe'),
    };
    expect(await firstValueFrom(store.selectOnce(AboutMeStoreState.getState))).toEqual(correctData);
  });
});
