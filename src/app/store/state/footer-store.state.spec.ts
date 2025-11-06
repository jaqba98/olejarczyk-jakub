import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { FooterStoreModel } from '../model/store/footer-store.model';
import { FooterStoreState } from './footer-store.state';
import { SectionBuilder } from '../../builder/service/section.builder';
import { PersonalBuilder } from '../../builder/service/personal.builder';
import { FooterBuilder } from '../../builder/service/footer.builder';

describe('Footer Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const result: FooterStoreModel = {
      ownSection: SectionBuilder.buildDataForKind('footer'),
      personal: PersonalBuilder.buildData(),
      footer: FooterBuilder.buildData(),
    };
    expect(await firstValueFrom(store.selectOnce(FooterStoreState.getState))).toEqual(result);
  });
});
