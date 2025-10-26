import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';
import { SkillStoreModel } from '../model/skill-store.model';
import { SkillStoreState } from './skill-store.state';

describe('Skill Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: SkillStoreModel = {
      sectionData: SectionDomainFinder.findDataByKind('skill'),
    };
    expect(await firstValueFrom(store.selectOnce(SkillStoreState.getState))).toEqual(correctData);
  });
});
