import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { ProjectStoreModel } from '../model/store/project-store.model';
import { ProjectStoreState } from './project-store.state';
import { SectionBuilder } from '../../builder/service/section.builder';
import { ProjectBuilder } from '../../builder/service/project.builder';

describe('Project Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const result: ProjectStoreModel = {
      ownSection: SectionBuilder.buildDataForKind('project'),
      project: ProjectBuilder.buildData(),
    };
    expect(await firstValueFrom(store.selectOnce(ProjectStoreState.getState))).toEqual(result);
  });
});
