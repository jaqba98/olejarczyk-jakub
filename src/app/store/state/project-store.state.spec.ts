import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';
import { ProjectStoreModel } from '../model/project-store.model';
import { ProjectStoreState } from './project-store.state';

describe('Project Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: ProjectStoreModel = {
      sectionData: SectionDomainFinder.findByKind('project'),
    };
    expect(await firstValueFrom(store.selectOnce(ProjectStoreState.getState))).toEqual(correctData);
  });
});
