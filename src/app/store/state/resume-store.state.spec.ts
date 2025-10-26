import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';
import { ResumeStoreModel } from '../model/resume-store.model';
import { ResumeStoreState } from './resume-store.state';

describe('Resume Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: ResumeStoreModel = {
      sectionData: SectionDomainFinder.findDataByKind('resume'),
    };
    expect(await firstValueFrom(store.selectOnce(ResumeStoreState.getState))).toEqual(correctData);
  });
});
