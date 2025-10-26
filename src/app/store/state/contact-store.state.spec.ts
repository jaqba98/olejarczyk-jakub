import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';
import { ContactStoreModel } from '../model/contact-store.model';
import { ContactStoreState } from './contact-store.state';

describe('Contact Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: ContactStoreModel = {
      sectionData: SectionDomainFinder.findByKind('contact'),
    };
    expect(await firstValueFrom(store.selectOnce(ContactStoreState.getState))).toEqual(correctData);
  });
});
