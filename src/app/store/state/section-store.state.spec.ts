import { TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { StoreProvider } from '../provider/store.provider';
import { SectionStoreModel } from '../model/section-store.model';
import { SectionLayoutBuilder } from '../../layout/builder/section-layout.builder';
import { SectionStoreState } from './section-store.state';

describe('About Me Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('should return valid data', async () => {
    const result: SectionStoreModel = {
      layout: SectionLayoutBuilder.build(),
    };
    expect(await firstValueFrom(store.selectOnce(SectionStoreState.getState))).toEqual(result);
  });
});
