import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';
import { BlogStoreModel } from '../model/blog-store.model';
import { BlogStoreState } from './blog-store.state';

describe('Blog Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: BlogStoreModel = {
      sectionData: SectionDomainFinder.findDataByKind('blog'),
    };
    expect(await firstValueFrom(store.selectOnce(BlogStoreState.getState))).toEqual(correctData);
  });
});
