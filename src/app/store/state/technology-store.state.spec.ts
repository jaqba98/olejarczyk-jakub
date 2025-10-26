import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';
import { TechnologyStoreModel } from '../model/technology-store.model';
import { TechnologyStoreState } from './technology-store.state';

describe('Technology Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: TechnologyStoreModel = {
      sectionData: SectionDomainFinder.findDataByKind('technology'),
    };
    expect(await firstValueFrom(store.selectOnce(TechnologyStoreState.getState))).toEqual(
      correctData,
    );
  });
});
