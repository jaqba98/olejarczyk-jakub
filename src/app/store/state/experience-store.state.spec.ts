import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';
import { ExperienceStoreModel } from '../model/experience-store.model';
import { ExperienceStoreState } from './experience-store.state';

describe('Experience Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: ExperienceStoreModel = {
      sectionData: SectionDomainFinder.findByKind('experience'),
    };
    expect(await firstValueFrom(store.selectOnce(ExperienceStoreState.getState))).toEqual(
      correctData,
    );
  });
});
