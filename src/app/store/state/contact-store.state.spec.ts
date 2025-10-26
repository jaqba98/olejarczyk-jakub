import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { ContactStoreModel } from '../model/store/contact-store.model';
import { ContactStoreState } from './contact-store.state';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';

describe('Contact Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: ContactStoreModel = {
      ownSectionData: SectionDataBuilder.buildDataForKind('contact'),
    };
    expect(await firstValueFrom(store.selectOnce(ContactStoreState.getState))).toEqual(correctData);
  });
});
