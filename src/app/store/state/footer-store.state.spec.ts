import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { SectionDataBuilder } from '../../builder/data/section-data.builder';
import { FooterStoreModel } from '../model/store/footer-store.model';
import { FooterStoreState } from './footer-store.state';
import { PersonalDataBuilder } from '../../builder/data/personal-data.builder';
import { FooterDataBuilder } from '../../builder/data/footer-data.builder';

describe('Footer Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: FooterStoreModel = {
      ownSection: SectionDataBuilder.buildDataForKind('footer'),
      personalData: PersonalDataBuilder.buildData(),
      footerData: FooterDataBuilder.buildData(),
    };
    expect(await firstValueFrom(store.selectOnce(FooterStoreState.getState))).toEqual(correctData);
  });
});
