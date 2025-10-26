import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';
import { EducationStoreModel } from '../model/education-store.model';
import { EducationStoreState } from './education-store.state';

describe('Education Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: EducationStoreModel = {
      sectionData: SectionDomainFinder.findDataByKind('education'),
    };
    expect(await firstValueFrom(store.selectOnce(EducationStoreState.getState))).toEqual(
      correctData,
    );
  });
});
