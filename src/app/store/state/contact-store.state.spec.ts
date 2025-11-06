import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { ContactStoreModel } from '../model/store/contact-store.model';
import { ContactStoreState } from './contact-store.state';
import { SectionBuilder } from '../../builder/service/section.builder';
import { PersonalBuilder } from '../../builder/service/personal.builder';
import { SocialMediaBuilder } from '../../builder/service/social-media.builder';

describe('Contact Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const result: ContactStoreModel = {
      sectionBuilder: SectionBuilder.buildDataForKind('contact'),
      personalBuilder: PersonalBuilder.buildData(),
      socialMediaBuilder: SocialMediaBuilder.buildData(),
    };
    expect(await firstValueFrom(store.selectOnce(ContactStoreState.getState))).toEqual(result);
  });
});
