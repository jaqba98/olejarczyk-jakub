import { TestBed } from '@angular/core/testing';
import { StoreProvider } from '../provider/store.provider';
import { Store } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';

import { SectionDataBuilder } from '../../builder/data/section-data.builder';
import { ProjectStoreModel } from '../model/store/project-store.model';
import { ProjectStoreState } from './project-store.state';
import { ProjectDataBuilder } from '../../builder/data/project-data.builder';

describe('Project Store State', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
    store = TestBed.inject(Store);
  });

  it('Should return the correct data', async () => {
    const correctData: ProjectStoreModel = {
      ownSectionData: SectionDataBuilder.buildDataForKind('project'),
      projectData: ProjectDataBuilder.buildData(),
    };
    expect(await firstValueFrom(store.selectOnce(ProjectStoreState.getState))).toEqual(correctData);
  });
});
