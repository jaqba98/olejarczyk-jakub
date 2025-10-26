import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { TechnologyStoreModel } from '../model/store/technology-store.model';
import { TechnologyStoreState } from './technology-store.state';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';

describe('Technology Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: TechnologyStoreModel = {
      ownSectionData: SectionDataBuilder.buildDataForKind('technology'),
    };
    expect(await firstValueFrom(store.selectOnce(TechnologyStoreState.getState))).toEqual(
      correctData,
    );
  });
});
