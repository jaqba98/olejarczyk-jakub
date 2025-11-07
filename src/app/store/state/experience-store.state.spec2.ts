// import { TestBed } from '@angular/core/testing';
// import { StoreProvider } from '../provider/store.provider';
// import { Store } from '@ngxs/store';
// import { firstValueFrom } from 'rxjs';

// import { ExperienceStoreModel } from '../model/store/experience-store.model';
// import { ExperienceStoreState } from './experience-store.state';
// import { SectionBuilder } from '../../builder/service/section.builder';
// import { ExperienceBuilder } from '../../builder/service/experience.builder';

// describe('Experience Store State', () => {
//   let store: Store;

//   beforeAll(() => {
//     TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
//     store = TestBed.inject(Store);
//   });

//   it('Should return the correct data', async () => {
//     const result: ExperienceStoreModel = {
//       ownSection: SectionBuilder.buildDataForKind('experience'),
//       experience: ExperienceBuilder.buildData(),
//     };
//     expect(await firstValueFrom(store.selectOnce(ExperienceStoreState.getState))).toEqual(result);
//   });
// });
