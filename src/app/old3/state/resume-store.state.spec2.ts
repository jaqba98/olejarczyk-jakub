// import { TestBed } from '@angular/core/testing';
// import { StoreProvider } from '../provider/store.provider';
// import { Store } from '@ngxs/store';
// import { firstValueFrom } from 'rxjs';

// import { ResumeStoreModel } from '../model/store/resume-store.model';
// import { ResumeStoreState } from './resume-store.state';
// import { SectionBuilder } from '../../builder/service/section.builder';
// import { ResumeBuilder } from '../../builder/service/resume.builder';

// describe('Resume Store State', () => {
//   let store: Store;

//   beforeAll(() => {
//     TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
//     store = TestBed.inject(Store);
//   });

//   it('Should return the correct data', async () => {
//     const result: ResumeStoreModel = {
//       ownSection: SectionBuilder.buildDataForKind('resume'),
//       resume: ResumeBuilder.buildData(),
//     };
//     expect(await firstValueFrom(store.selectOnce(ResumeStoreState.getState))).toEqual(result);
//   });
// });
