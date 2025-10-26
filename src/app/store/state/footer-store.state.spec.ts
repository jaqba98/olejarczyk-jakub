import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';
import { FooterStoreModel } from '../model/footer-store.model';
import { FooterStoreState } from './footer-store.state';

describe('Footer Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: FooterStoreModel = {
      sectionData: SectionDomainFinder.findDataByKind('footer'),
    };
    expect(await firstValueFrom(store.selectOnce(FooterStoreState.getState))).toEqual(correctData);
  });
});
