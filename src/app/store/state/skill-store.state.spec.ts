import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { SkillStoreModel } from '../model/store/skill-store.model';
import { SkillStoreState } from './skill-store.state';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';

describe('Skill Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: SkillStoreModel = {
      ownSectionData: SectionDataBuilder.buildDataForKind('skill'),
    };
    expect(await firstValueFrom(store.selectOnce(SkillStoreState.getState))).toEqual(correctData);
  });
});
