import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { ExperienceStoreModel } from '../model/store/experience-store.model';
import { ExperienceStoreState } from './experience-store.state';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';

describe('Experience Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: ExperienceStoreModel = {
      ownSectionData: SectionDataBuilder.buildDataForKind('experience'),
    };
    expect(await firstValueFrom(store.selectOnce(ExperienceStoreState.getState))).toEqual(
      correctData,
    );
  });
});
