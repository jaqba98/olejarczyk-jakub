import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { BlogStoreModel } from '../model/store/blog-store.model';
import { BlogStoreState } from './blog-store.state';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';

describe('Blog Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: BlogStoreModel = {
      ownSectionData: SectionDataBuilder.buildDataForKind('blog'),
    };
    expect(await firstValueFrom(store.selectOnce(BlogStoreState.getState))).toEqual(correctData);
  });
});
