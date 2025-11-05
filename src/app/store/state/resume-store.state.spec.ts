import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { ResumeStoreModel } from '../model/store/resume-store.model';
import { ResumeStoreState } from './resume-store.state';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';
import { ResumeDataBuilder } from '../../builder/data/resume-data.builder';

describe('Resume Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: ResumeStoreModel = {
      ownSection: SectionDataBuilder.buildDataForKind('resume'),
      resumeData: ResumeDataBuilder.buildData(),
    };
    expect(await firstValueFrom(store.selectOnce(ResumeStoreState.getState))).toEqual(correctData);
  });
});
